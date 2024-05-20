"use client";

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
  user: {
    id?: string;
    objectId?: string;
    username?: string;
    name?: string;
    bio?: string;
    image?: string;
  };
  btnTitle?: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  
  // const form = useForm({
  //   resolver: ''
  // })

  return (
    // <Form>
      <h1>Form</h1>
    // </Form>
  );
};

export default AccountProfile;
