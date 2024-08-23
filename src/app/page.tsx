import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { BuyMeCoffee } from "../../components/BuyMeCoffee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="my-4 text-xl">Buy Me A Coffee App</h1>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <BuyMeCoffee />
    </div>
  );
}
