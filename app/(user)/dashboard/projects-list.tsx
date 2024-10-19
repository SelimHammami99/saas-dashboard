import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubscribeBtn from "../payments/subscribe-btn";
import { monthlyPlanId } from "@/lib/payments";
import { Lock } from "lucide-react";
import ChatGPTCarousel from "@/components/gpt-card";

type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[];
};

const ProjectsList = (props: Props) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
        {props.projects.map((project) => (
          <li key={project.id}>
            <Card className="max-w-[350px] flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="">
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
        {/* <Card className="max-w-[350px] flex flex-col h-full bg-gray-300">
          <CardHeader className="flex-1">
            <CardTitle className="flex flex-row text-sm md:text-lg items-center">
              <Lock className="h-4 w-4 md:h-8 md:w-8 mr-2" />
              <span>Upgrade to Premuim</span>
            </CardTitle>
            <CardDescription className="mt-3">
              Unlock unlimited projects and more features
            </CardDescription>
          </CardHeader>
          <div className="w-fit mx-auto mb-4">
            <SubscribeBtn price={monthlyPlanId} />
          </div>
        </Card> */}
        <Card className="max-w-[350px] h-full flex flex-col bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 overflow-hidden border-0 rounded-lg shadow-md">
          <CardContent className="p-6  flex flex-col justify-between">
            <div className="flex flex-row text-sm md:text-lg items-center text-white">
              <Lock className="h-6 w-6 mr-2" />
              <span>Upgrade to Premuim</span>
            </div>
            <div className=" text-white mt-3">
              Unlock unlimited projects and more features
            </div>
            <div className="w-fit mx-auto mb-4">
              <SubscribeBtn price={monthlyPlanId} />
            </div>
          </CardContent>
        </Card>
      </ul>
    </div>
  );
};

export default ProjectsList;
