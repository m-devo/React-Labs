import { useForm, type FieldErrors } from 'react-hook-form'; 
import Swal from 'sweetalert2'; 

type ContactFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  agreeToTerms: boolean; 
};

const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data);
    Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'We will get back to you soon.',
        confirmButtonColor: '#2563EB'
    });

    reset();
  };

  const onError = (errors: FieldErrors<ContactFormInputs>) => {
    if (errors.agreeToTerms) {
      Swal.fire({
        icon: 'warning',
        title: 'Terms Required',
        text: 'You must agree to the terms and conditions to proceed.',
        confirmButtonColor: 'black'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 flex justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
        <p className="text-gray-500 mb-8">Please fill in the form below to get in touch with us.</p>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm text-gray-600 mb-1">First Name</label>
                <input 
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 
                  focus:outline-none focus:border-blue-500"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>

            <div>
                <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                <input 
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 
                  py-3 focus:outline-none focus:border-blue-500"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                <input 
                  {...register("email", { 
                      required: "Email is required",
                      pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format"
                      }
                  })}
                  className="w-full bg-gray-50 border 
                  border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                <input 
                  {...register("phone", {
                      pattern: {
                          value: /^[0-9+\-\s()]{10,}$/,
                          message: "Invalid phone number format"
                      },
                      minLength: {
                          value: 10,
                          message: "Phone number must be at least 10 digits"
                      },
                      maxLength: {
                          value: 20, 
                          message: "Phone number cannot exceed 20 characters"
                      }
                  })}
                  placeholder="+1 234 567 890"
                  className="w-full bg-gray-50 border border-gray-200 
                  rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea 
              {...register("message", { 
                  required: "Message is required",
                  minLength: { value: 10, message: "Message must be at least 10 characters" },
                  maxLength: { value: 500, message: "Message cannot exceed 500 characters" }
              })}
              rows={4}
              className="w-full bg-gray-50 border border-gray-200 
              rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox"
              id="terms"
              {...register("agreeToTerms", { required: true })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer select-none">
              I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="bg-black text-white 
          px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;