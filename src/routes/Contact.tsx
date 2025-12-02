import { useForm } from "@tanstack/react-form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      alert("Message sent!\n" + JSON.stringify(value, null, 2));
    },
  });

  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-2xl font-semibold">Contact</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-4"
      >

        {/* NAME */}
        <form.Field
          name="name"
          children={(field) => (
            <div className="space-y-1">
              <label>Name</label>
              <Input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Your name"
              />
            </div>
          )}
        />

        {/* EMAIL */}
        <form.Field
          name="email"
          children={(field) => (
            <div className="space-y-1">
              <label>Email</label>
              <Input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
          )}
        />

        {/* MESSAGE */}
        <form.Field
          name="message"
          children={(field) => (
            <div className="space-y-1">
              <label>Message</label>
              <Textarea
                rows={4}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Type your message..."
              />
            </div>
          )}
        />

        <Button type="submit" className="w-full">
          Send Message
        </Button>

      </form>
    </div>
  );
}
