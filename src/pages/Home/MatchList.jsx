import React, { useEffect } from "react";
import MatchCard from "../../components/MatchCard/MatchCard";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { useInView } from "react-intersection-observer";

function MatchList({ searchVal }) {
    const fetchMatches = async ({ pageParam = 0 }) => {
        const res = await axios.get(
            "https://matchday.ai/referee/champ/fixture/dummy-matches?page=" +
                pageParam
        );
        return res.data;
    };

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery("matches", fetchMatches, {
        getNextPageParam: (lastPage) => {
            const lastPageId = parseInt(lastPage.page);
            const nextId = lastPageId + 1;

            if (nextId > lastPage.totalPages) return undefined;

            return nextId;
        },
    });

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, searchVal, fetchNextPage]);

    return (
        <div className="match-list-page">
            <div className="match-list">
                {status === "loading" ? (
                    <p>Loading...</p>
                ) : status === "error" ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <>
                        {data.pages.map((group, i) => (
                            <React.Fragment key={i}>
                                {group.fixtures
                                    .filter((fixture) => {
                                        const lowerSearchValue =
                                            searchVal.toLowerCase();

                                        return (
                                            fixture.team1[0].name
                                                .toLowerCase()
                                                .includes(lowerSearchValue) ||
                                            fixture.team2[0].name
                                                .toLowerCase()
                                                .includes(lowerSearchValue) ||
                                            fixture.tournament[0].name
                                                .toLowerCase()
                                                .includes(lowerSearchValue)
                                        );
                                    })
                                    .map((fixture) => (
                                        <MatchCard
                                            key={fixture.fixtureId}
                                            heading={fixture.tournament[0].name}
                                            subHeading={fixture.round}
                                            logo={
                                                "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T160422Z&X-Amz-Expires=86400&X-Amz-Signature=f0881dbf6ec0a0a44f9b50f34db9e3aa04edeef52d2545e047cd7c073efad02f&X-Amz-SignedHeaders=host&x-id=GetObject"
                                            }
                                            team1Name={fixture.team1[0].name}
                                            team2Name={fixture.team2[0].name}
                                            winner={
                                                fixture.team1[0].name ===
                                                fixture.winner
                                                    ? 0
                                                    : 1
                                            }
                                            a1={fixture.a1}
                                            a2={fixture.a2}
                                            a3={fixture.a3}
                                            b1={fixture.b1}
                                            b2={fixture.b2}
                                            b3={fixture.b3}
                                        />
                                    ))}
                            </React.Fragment>
                        ))}
                    </>
                )}
            </div>
            <div style={{ visibility: "hidden" }} ref={ref}>
                {isFetchingNextPage
                    ? "Loading more..."
                    : hasNextPage
                    ? "Load Newer"
                    : "Nothing more to load"}
            </div>
        </div>
    );
}

export default MatchList;
