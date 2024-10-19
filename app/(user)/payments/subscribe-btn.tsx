"use client";
import { useState } from "react";
import { getStripe } from "@/lib/stripe-client";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

type Props = {
  price: string;
};

const SubscribeBtn = ({ price }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async (price: string) => {
    setLoading(true);
    try {
      const { sessionId } = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price }),
      }).then((res) => res.json());

      const stripe = await getStripe();
      if (stripe) {
        stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    // <Button
    //   onClick={() => handleCheckout(price)}
    //   className="bg-indigo-700"
    //   disabled={loading}
    // >
    //   {loading ? (
    //     <>
    //       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    //       Please Wait
    //     </>
    //   ) : (
    //     "Subscribe"
    //   )}
    // </Button>
    <button
      disabled={loading}
      onClick={() => handleCheckout(price)}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 relative overflow-hidden group`}
    >
      <span className="relative z-10">
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Subscribe"
        )}
      </span>
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white dark:via-slate-300 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full"></span>
    </button>
  );
};

export default SubscribeBtn;
