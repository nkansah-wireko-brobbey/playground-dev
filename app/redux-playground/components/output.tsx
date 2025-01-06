import NumberTicker from "@/components/ui/number-ticker";
import { Rootstate } from "@/store/store";
import { useSelector } from "react-redux";

export function TextOutput() {
    console.log("Number Text Output Rendered")
    const value = useSelector((state: Rootstate)=> state.counter.value)
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={value} />
    </p>
  );
}
