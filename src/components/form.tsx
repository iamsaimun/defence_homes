"use client";
import { validateForm } from "@/lib/definition";
import { useActionState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Loader } from "lucide-react";

export function ClientForm() {
  const [state, action, pending] = useActionState(validateForm, undefined);
  return (
    <>
      <form
        action={action}
        className="max-w-sm m-auto grid gap-4 bg-yellow-400 p-7 rounded-lg"
      >
        <div>
          <Label htmlFor="user_name">Full Name</Label>
          <Input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Your Full Name"
          />
          {state?.errors?.full_name}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Your Phone Number"
          />
          {state?.errors?.phone}
        </div>
        <div>
          <Label htmlFor="designation">Designation</Label>
          <Input
            type="text"
            name="designation"
            id="designation"
            placeholder="Your Designation"
          />
          {state?.errors?.designation}
        </div>
        <div>
          <Label htmlFor="interested_in">Interested In</Label>
          <Select required name="interested_in">
            <SelectTrigger>
              <SelectValue placeholder="Select One" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ready Flat">Ready Flat</SelectItem>
              <SelectItem value="Land Share">Land Share</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {pending ? (
          <Button role="button" className="w-full" variant="default"></Button>
        ) : (
          <Button role="button" className="w-full" variant="default">
            {pending ? (
              <>
                <Loader className="animate-spin" />
                Please Wait
              </>
            ) : (
              "Submit"
            )}
          </Button>
        )}
        <div>{state?.success}</div>
      </form>
    </>
  );
}
