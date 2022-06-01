import { gql } from "@apollo/client";

export const ALL_MATCHUPS = gql`
    query AllMatchups {
  allMatchups {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`

export const SINGLE_MATCHUP = gql`
query oneMatchup($matchId: ID!) {
  oneMatchup(matchId: $matchId) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`
export const ALL_TECH = gql`
query AllTech {
  allTech {
    _id
    name
  }
}
`
