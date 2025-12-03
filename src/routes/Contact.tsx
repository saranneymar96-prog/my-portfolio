import { useForm } from "@tanstack/react-form";
import { contactSchema } from "../schema/contactSchema";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useState } from "react";

// Error type
type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [errors, setErrors] = useState<FieldErrors>({});

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },

    onSubmit: async ({ value }) => {
      // Validate using Zod
      const result = contactSchema.safeParse(value);

      if (!result.success) {
        const zodErrors = result.error.flatten().fieldErrors;

        setErrors({
          name: zodErrors.name?.[0],
          email: zodErrors.email?.[0],
          message: zodErrors.message?.[0],
        });

        return; // Stop submit if invalid
      }

      // Clear errors on success
      setErrors({});
      alert("Message Sent!\n" + JSON.stringify(result.data, null, 2));
    },
  });

  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-2xl font-semibold">Contact</h2>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {/* NAME FIELD */}
        <form.Field name="name">
          {(field) => (
            <div className="space-y-1 text-sm">
              <label>Name</label>
              <Input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>
          )}
        </form.Field>

        {/* EMAIL FIELD */}
        <form.Field name="email">
          {(field) => (
            <div className="space-y-1 text-sm">
              <label>Email</label>
              <Input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          )}
        </form.Field>

        {/* MESSAGE FIELD */}
        <form.Field name="message">
          {(field) => (
            <div className="space-y-1 text-sm">
              <label>Message</label>
              <Textarea
                rows={4}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Type your message..."
              />
              {errors.message && (
                <p className="text-xs text-red-500">{errors.message}</p>
              )}
            </div>
          )}
        </form.Field>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
