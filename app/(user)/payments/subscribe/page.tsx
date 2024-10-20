import SubscribeBtn from "../subscribe-btn";
import { monthlyPlanId, yearlyPlanId } from "@/lib/payments";

const page = ({ searchParams }: { searchParams: { plan: string } }) => {
  const { plan } = searchParams;

  const price = plan === "yearly" ? yearlyPlanId : monthlyPlanId;
  return (
    <div className="flex border-4 p-4 rounded-md flex-col">
      <h1 className="text-2xl font-bold"> Start your subscription now</h1>
      <div className="w-fit mt-3">
        <SubscribeBtn price={price} />
      </div>
    </div>
  );
};

export default page;
