// "use client";
// import { signIn } from "next-auth/react";
// import {
//   ChangeEventHandler,
//   DOMAttributes,
//   FC,
//   InputHTMLAttributes,
//   ReactNode,
//   useState,
// } from "react";

// interface AuthFormContainerProps {
//   children: ReactNode;
//   title: string;
//   linkOne: { label?: string; href: string; title: string };
//   linkTwo: { label?: string; href: string; title: string };
//   onSubmit?: DOMAttributes<HTMLFormElement>["onSubmit"];
// }

// const AuthFormContainer: FC<AuthFormContainerProps> = ({
//   linkOne,
//   linkTwo,
//   children,
//   title,
//   onSubmit,
// }) => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form
//         onSubmit={onSubmit}
//         className="bg-white shadow-md p-10 w-96 space-y-6"
//       >
//         <h1 className="text-3xl text-gray-800">{title}</h1>
//         {children}

//         <div className="text-sm text-gray-800 mt-10 space-y-2">
//           <div>
//             {linkOne.label ? (
//               <span className="mr-1">{linkOne.label}</span>
//             ) : null}
//             <a
//               className="uppercase underline text-blue-500"
//               href={linkOne.href}
//             >
//               {linkOne.title}
//             </a>
//           </div>

//           <div>
//             {linkTwo.label ? (
//               <span className="mr-1">{linkTwo.label}</span>
//             ) : null}
//             <a
//               className="uppercase underline text-blue-500"
//               href={linkTwo.href}
//             >
//               {linkTwo.title}
//             </a>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   value?: string;
//   placeholder?: string;
//   name: string;
// }

// const AuthInput: FC<AuthInputProps> = ({
//   label,
//   placeholder,
//   value,
//   name,
//   ...rest
// }) => {
//   return (
//     <div>
//       <label className="text-sm text-gray-800" htmlFor={name}>
//         {label}
//       </label>
//       <input
//         id={name}
//         className="bg-none w-full p-2 border border-gray-600 rounded"
//         placeholder={placeholder}
//         value={value}
//         name={name}
//         {...rest}
//       />
//     </div>
//   );
// };

// interface SubmitBtnProps {
//   value?: string;
// }

// const SubmitBtn: FC<SubmitBtnProps> = ({ value }) => {
//   return (
//     <div>
//       <input
//         type="submit"
//         value={value}
//         className="bg-none w-full p-2 rounded outline-none bg-blue-600 text-white cursor-pointer hover:shadow-md transition-all"
//       />
//     </div>
//   );
// };

// const SignIn = () => {
//   const [userInfo, setUserInfo] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
//     const { name, value } = target;

//     setUserInfo({ ...userInfo, [name]: value });
//   };

//   return (
//     <AuthFormContainer
//       onSubmit={async (e) => {
//         e.preventDefault();
//         await signIn("credentials", { ...userInfo, callbackUrl: "/checkout" });
//       }}
//       linkOne={{ href: "#", label: "Have trouble", title: "Forget Password" }}
//       linkTwo={{ href: "#", label: "Need an Account", title: "Sign Up" }}
//       title="Login"
//     >
//       <AuthInput
//         name="email"
//         type="text"
//         label="Email"
//         placeholder="john@email.com"
//         onChange={handleChange}
//       />
//       <AuthInput
//         name="password"
//         type="password"
//         label="Password"
//         placeholder="********"
//         onChange={handleChange}
//       />
//       <SubmitBtn value="Login" />
//     </AuthFormContainer>
//   );
// };

// export default SignIn;

// "use client";
// import {
//   ChangeEventHandler,
//   DOMAttributes,
//   FC,
//   InputHTMLAttributes,
//   ReactNode,
//   useState,
// } from "react";

// interface AuthFormContainerProps {
//   children: ReactNode;
//   title: string;
//   linkOne: { label?: string; href: string; title: string };
//   linkTwo: { label?: string; href: string; title: string };
//   onSubmit?: DOMAttributes<HTMLFormElement>["onSubmit"];
// }

// const AuthFormContainer: FC<AuthFormContainerProps> = ({
//   linkOne,
//   linkTwo,
//   children,
//   title,
//   onSubmit,
// }) => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form
//         onSubmit={onSubmit}
//         className="bg-white shadow-md p-10 w-96 space-y-6"
//       >
//         <h1 className="text-3xl text-gray-800">{title}</h1>
//         {children}

//         <div className="text-sm text-gray-800 mt-10 space-y-2">
//           <div>
//             {linkOne.label ? (
//               <span className="mr-1">{linkOne.label}</span>
//             ) : null}
//             <a
//               className="uppercase underline text-blue-500"
//               href={linkOne.href}
//             >
//               {linkOne.title}
//             </a>
//           </div>

//           <div>
//             {linkTwo.label ? (
//               <span className="mr-1">{linkTwo.label}</span>
//             ) : null}
//             <a
//               className="uppercase underline text-blue-500"
//               href={linkTwo.href}
//             >
//               {linkTwo.title}
//             </a>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   value?: string;
//   placeholder?: string;
//   name: string;
// }

// const AuthInput: FC<AuthInputProps> = ({
//   label,
//   placeholder,
//   value,
//   name,
//   ...rest
// }) => {
//   return (
//     <div>
//       <label className="text-sm text-gray-800" htmlFor={name}>
//         {label}
//       </label>
//       <input
//         id={name}
//         className="bg-none w-full p-2 border border-gray-600 rounded"
//         placeholder={placeholder}
//         value={value}
//         name={name}
//         {...rest}
//       />
//     </div>
//   );
// };

// interface SubmitBtnProps {
//   value?: string;
// }

// const SubmitBtn: FC<SubmitBtnProps> = ({ value }) => {
//   return (
//     <div>
//       <input
//         type="submit"
//         value={value}
//         className="bg-none w-full p-2 rounded outline-none bg-blue-600 text-white cursor-pointer hover:shadow-md transition-all"
//       />
//     </div>
//   );
// };

// const GetQuotationForm = () => {
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
//     const { name, value } = target;
//     setUserInfo({ ...userInfo, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("User Info:", userInfo);
//     // Perform your action here, e.g., send data to a backend.
//   };

//   return (
//     <AuthFormContainer
//       onSubmit={handleSubmit}
//       linkOne={{ href: "#", label: "Need Help?", title: "Contact Support" }}
//       linkTwo={{ href: "#", label: "New User?", title: "Sign Up" }}
//       title="Get Quotation"
//     >
//       <AuthInput
//         name="name"
//         type="text"
//         label="Full Name"
//         placeholder="John Doe"
//         onChange={handleChange}
//       />
//       <AuthInput
//         name="email"
//         type="email"
//         label="Email Address"
//         placeholder="john.doe@example.com"
//         onChange={handleChange}
//       />
//       <AuthInput
//         name="phone"
//         type="tel"
//         label="Phone Number"
//         placeholder="123-456-7890"
//         onChange={handleChange}
//       />
//       <SubmitBtn value="Get Quotation" />
//     </AuthFormContainer>
//   );
// };

// export default GetQuotationForm;


"use client";
import { useState } from "react";
import axios from "axios";

interface AuthFormContainerProps {
  children: React.ReactNode;
  title: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  children,
  title,
  onSubmit,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md p-10 w-96 space-y-6"
      >
        <h1 className="text-3xl text-gray-800">{title}</h1>
        {children}
      </form>
    </div>
  );
};

interface AuthInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="text-sm text-gray-800" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="bg-none w-full p-2 border border-gray-600 rounded"
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

interface SubmitBtnProps {
  value?: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ value }) => {
  return (
    <div>
      <input
        type="submit"
        value={value}
        className="bg-none w-full p-2 rounded outline-none bg-blue-600 text-white cursor-pointer hover:shadow-md transition-all"
      />
    </div>
  );
};

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  
    try {
      // Retrieve cart items from localStorage
      const cartItems = localStorage.getItem("cartItems");
      if (!cartItems) {
        alert("No items in the cart.");
        return;
      }
  
      // Parse cart items into an object
      const parsedCartItems = JSON.parse(cartItems);
  
      // Prepare the payload
      const payload = {
        formData, 
        cartItems: parsedCartItems,
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/quotation/`, payload);
  
      // Handle response
      console.log("Quotation submitted successfully:", response.data);
      alert("Quotation submitted successfully!");
    } catch (error) {
      console.error("Failed to submit quotation:", error);
      alert("Failed to submit quotation. Please try again.");
    }
  };
  

  return (
    <AuthFormContainer
      onSubmit={handleSubmit}
      title="Get Quotation"
    >
      <AuthInput
        name="name"
        label="Name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <AuthInput
        name="email"
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <AuthInput
        name="phone"
        label="Phone Number"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
      />
      <SubmitBtn value="Get Quotation" />
    </AuthFormContainer>
  );
};

export default QuotationForm;
