import { useUser } from "@clerk/nextjs";
import React from "react";
import type { RouterOutputs } from "~/utils/api";

type PostWithUser = RouterOutputs["submission"]["getAll"][number];

const Postview = (props: PostWithUser) => {
  const { submission, auther } = props;
  // const { user } = useUser();

  return <p key={submission.id}>{submission.content}</p>;
};

export default Postview;
