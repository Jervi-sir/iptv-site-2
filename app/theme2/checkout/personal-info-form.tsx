import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User, Globe, MapPin } from "lucide-react";

export const PersonalInfoForm = ({
  formData,
  formErrors,
  handleChange,
  nextStep,
  prevStep,
}: {
  formData: FormData;
  formErrors: Partial<FormData>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
}) => (
  <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
    <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
    <div className="space-y-4">
      {[
        { id: "fullName", label: "Full Name", Icon: User, type: "text" },
        { id: "email", label: "Email Address", Icon: Mail, type: "email" },
        { id: "phone", label: "Phone Number", Icon: Phone, type: "tel" },
      ].map(({ id, label, Icon, type }) => (
        <div key={id} className="space-y-2">
          <Label htmlFor={id} className="flex items-center">
            <Icon size={16} className="mr-1" /> {label}
          </Label>
          <Input
            id={id}
            name={id}
            type={type}
            value={formData[id as keyof FormData] as any}
            onChange={handleChange}
            required
            className="bg-transparent text-black focus:bg-transparent"
          />
          {formErrors[id as keyof FormData] && (
            <div className="text-red-500 text-sm">{formErrors[id as keyof FormData] as any}</div>
          )}
        </div>
      ))}
    </div>
    <div className="flex gap-4 mt-8">
      <Button type="button" variant="outline" onClick={prevStep}>
        Back to Plans
      </Button>
      <Button type="submit" className="btn-primary flex-grow">
        Continue to Address
      </Button>
    </div>
  </form>
);