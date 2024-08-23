import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";

const contactAddress = "0xBf63b404E21A5cCd679623db1d2Fc9Cd9df25174";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contactAddress,
    abi: contractABI,
});