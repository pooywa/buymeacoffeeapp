'use client';

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount } from "thirdweb/react";

export const BuyMeCoffee = () => {
    const account = useActiveAccount();

    if (account) {
        return (
            <div className="flex flex-col min-h-screen justify-center items-center">
                <ConnectButton
                    client={client}
                    chain={chain}
                />
            </div>
        )
    }
};