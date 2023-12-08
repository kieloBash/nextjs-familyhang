"use client";
import React, { useState } from "react";

// UI
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { createNewChallenge } from "@/lib/actions/challenge.action";

const AddQuestionDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const queryClient = useQueryClient();

  async function handleSubmit() {
    if (!answer && !question) return null;
    setIsLoading(true);

    const res = await createNewChallenge({ answer, question });

    if (true) {
      setIsLoading(false);
      setOpen(false);
      setAnswer("");

      queryClient.invalidateQueries({
        queryKey: [`challenges`],
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] lg:max-w-xl">
        <DialogHeader>
          <DialogTitle>Add New Question</DialogTitle>
          <DialogDescription>
            You can add a new question here and their corresponding answers.
          </DialogDescription>
        </DialogHeader>

        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="question">Question</Label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter the question..."
            id="question"
            rows={1}
            className="col-span-3 p-2 text-sm outline-none border rounded-md"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="answer">Answer</Label>
          <Input
            type="text"
            id="answer"
            placeholder="Enter the answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button disabled={isLoading} type="button" onClick={handleSubmit}>
            Confirm{" "}
            {isLoading && <Loader2 className="w-5 h-5 animate-spin ml-2" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuestionDialog;
