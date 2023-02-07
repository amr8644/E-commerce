import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Login() {
   const { data: session } = useSession();
   return (
      <Center p={8}>
         <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
            {/* Facebook */}
            <Button
               w={"full"}
               colorScheme={"facebook"}
               leftIcon={<FaFacebook />}
            >
               <Center>
                  <Text>Continue with Facebook</Text>
               </Center>
            </Button>

            {/* Google */}
            <Button
               onClick={() =>
                  signIn("google", {
                     callbackUrl: "http://localhost:3000/home",
                  })
               }
               w={"full"}
               variant={"outline"}
               leftIcon={<FcGoogle />}
            >
               <Center>
                  <Text>Sign in with Google</Text>
               </Center>
            </Button>
         </Stack>
      </Center>
   );
}
