"use client";

import { TextArea, TextField, TextFieldInput, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import React, { use } from "react";
import { useRouter } from "next/navigation";

interface issuesForm {
  title: string;
  description: string;
}

export default function NewIssuesPage() {
  const { register, control, handleSubmit } = useForm<issuesForm>();
  const router = useRouter();
  console.log(register("title"));

  return (
    <form
      className="max-w-xl space-y-3 "
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root>
        <TextFieldInput placeholder="Title" {...register("title")} />
      </TextField.Root>

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Submit New Issue</Button>
    </form>
  );
}
