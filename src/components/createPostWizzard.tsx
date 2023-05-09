import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { api } from "~/utils/api";

const CreatePostWizzard = () => {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const { mutate } = api.submission.create.useMutation();

  if (!user) return <p>Please sign in.</p>;

  return (
    <form className="flex gap-4">
      <Textarea
        placeholder="Please enter a complaint"
        typeof="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="outline" onClick={() => mutate({ content: input })}>
        Subbmit
      </Button>
    </form>
  );
};

export default CreatePostWizzard;
