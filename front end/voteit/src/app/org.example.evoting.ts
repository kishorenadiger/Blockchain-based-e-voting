import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.evoting{
   export class voter extends Participant {
      voterID: string;
      email: string;
   }
   export class ifVoted extends Asset {
      voterID: string;
      votedOrNot: boolean;
   }
   export class candidateVote extends Asset {
      politicalParty: string;
      totalVote: number;
   }
   export class vote extends Transaction {
      candidateVoteAsset: candidateVote;
      ifVotedAsset: ifVoted;
   }