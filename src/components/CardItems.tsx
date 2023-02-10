import React from "react";
import {
   Card,
   CardBody,
   Stack,
   Heading,
   CardFooter,
   Button,
   Image,
   Box,
   useToast,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { useRouter } from "next/router";

const CardItems = ({ userItems: products }: any) => {
   const toast = useToast();
   const router = useRouter();
   const deleteProducts = async (id: any) => {
      try {
         const response = await fetch(
            `http://localhost:3000/api/products/${id}`,
            {
               method: "DELETE",
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );
         if (response.status == 200) {
            router.replace(router.asPath);
            toast({
               title: "Product deleted.",
               status: "success",
               position: "top",
               isClosable: true,
            });
         }
         if (response.status == 401) {
            router.push("/login");
            toast({
               title: "You need to login first",
               status: "error",
               position: "top",
               isClosable: true,
            });
         }
         if (response.status == 500) {
            toast({
               title: "Server error",
               status: "error",
               position: "top",
               isClosable: true,
            });
         }
         return response;
      } catch (error: any) {
         console.log(error);
         toast({
            title: error.message || "Server error",
            status: "error",
            position: "top",
            isClosable: true,
         });
      }
   };
   return (
      <>
         {products?.products?.map((e: any) => {
            const { title, price, quantity, image, id } = e;
            return (
               <>
                  <Box my={"10px"}></Box>
                  <Card
                     width={"100%"}
                     display={"flex"}
                     alignItems="center"
                     //  justifyContent={"space-around"}
                     direction={{ base: "column", sm: "row" }}
                     overflow="hidden"
                     variant="outline"
                  >
                     <Image
                        marginLeft={"12px"}
                        width={"150px"}
                        height={"150px"}
                        objectFit="cover"
                        // maxW={{ base: "100px", sm: "100px" }}
                        src={`${image}`}
                        alt="Caffe Latte"
                     />

                     <Stack>
                        <CardBody>
                           <Heading size="sm">{title}</Heading>
                        </CardBody>

                        <CardFooter>
                           <Box fontSize="2xl">
                              <Box as="span" color={"gray.600"} fontSize="lg">
                                 £
                              </Box>
                              {price}
                           </Box>
                           <Button
                              onClick={() => {
                                 deleteProducts(id);
                              }}
                              mx={"10px"}
                              variant="ghost"
                              colorScheme="red"
                           >
                              <BsTrash />
                           </Button>
                        </CardFooter>
                     </Stack>
                  </Card>
               </>
            );
         })}
      </>
   );
};

export default CardItems;
