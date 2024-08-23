'use client';

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { useState } from "react";
import { prepareContractCall, toWei } from "thirdweb";
import { ConnectButton, TransactionButton, useActiveAccount } from "thirdweb/react";
import { contract } from "../utils/contract";

export const BuyMeCoffee = () => {
    const account = useActiveAccount();

    const [tipAmount, setTipAmount] = useState(0);
    const [message, setMessage] = useState("");

    if (account) {
        return (
            <div className="flex flex-col min-h-screen justify-center items-center">
                <ConnectButton
                    client={client}
                    chain={chain}
                />

                <div>
                    <label className="block text-sm font-medium">Tip Amount: </label>
                    <p>*tip must be grater than 0</p>
                    <input
                        className="block w-full rounded-md border-1 py-1.5 pl-7 pr-20 text-black"
                        type="number"
                        value={tipAmount}
                        onChange={(e) => setTipAmount(Number(e.target.value))}
                        step={0.01}
                    />

                    <label>Message</label>
                    <input
                        className="block w-full"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="write your message"
                    />
                </div>
                {message && tipAmount > 0 && (
                    <TransactionButton
                        transaction={() => (
                            prepareContractCall({
                                contract: contract,
                                method: 'buyMeACoffee',
                                params: [message],
                                value: BigInt(toWei(tipAmount.toString())),
                            })
                        )}
                        onTransactionConfirmed={() => {
                            alert("thank you for the coffee");
                            setTipAmount(0);
                            setMessage("");
                        }}
                    >Buy Me A Coffee</TransactionButton>
                )}


            </div>


        )
    }
};