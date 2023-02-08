import {
   Flex,
   Box,
   Image,
   useColorModeValue,
   Icon,
   chakra,
   Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading } from "@chakra-ui/react";
import "swiper/css";
import { useRouter } from "next/router";

interface RatingProps {
   rating: number;
   numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
   return (
      <Box display="flex" alignItems="center">
         {Array(5)
            .fill("")
            .map((_, i) => {
               const roundedRating = Math.round(rating * 2) / 2;
               if (roundedRating - i >= 1) {
                  return (
                     <BsStarFill
                        key={i}
                        style={{ marginLeft: "1" }}
                        color={i < rating ? "teal.500" : "gray.300"}
                     />
                  );
               }
               if (roundedRating - i === 0.5) {
                  return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
               }
               return <BsStar key={i} style={{ marginLeft: "1" }} />;
            })}
         <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {numReviews} review{numReviews > 1 && "s"}
         </Box>
      </Box>
   );
}

function Card({ data }: any) {
   const router = useRouter();
   return (
      <>
         <Heading marginTop={"30px"} marginLeft={"30px"}></Heading>
         <Flex
            p={50}
            w="full"
            alignItems="center"
            // flexDirection={"row"}
            justifyContent="center"
         >
            <Swiper
               spaceBetween={50}
               slidesPerView={3}
               onSlideChange={() => console.log("slide change")}
               onSwiper={(swiper) => console.log(swiper)}
            >
               {data.map((item: any) => {
                  const { id, title, price, image, rating } = item;
                  return (
                     <Box
                        onClick={() => {}}
                        key={id}
                        // maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative"
                        minH={"400px"}
                     >
                        <SwiperSlide>
                           <Image
                              height={"200px"}
                              w="full"
                              minH={"200px"}
                              src={image}
                              alt={`Picture of ${title}`}
                              roundedTop="lg"
                           />

                           <Box p="6">
                              <Flex
                                 mt="1"
                                 justifyContent="space-between"
                                 alignContent="center"
                              >
                                 <Box
                                    fontSize="2xl"
                                    fontWeight="semibold"
                                    as="h4"
                                    lineHeight="tight"
                                    isTruncated
                                 >
                                    {title}
                                 </Box>
                                 <Tooltip
                                    label="Add to cart"
                                    bg="white"
                                    placement={"top"}
                                    color={"gray.800"}
                                    fontSize={"1.2em"}
                                 >
                                    <chakra.a
                                       onClick={() => {
                                          router.push(`/products/${id}`);
                                       }}
                                       display={"flex"}
                                    >
                                       <Icon
                                          as={FiShoppingCart}
                                          h={7}
                                          w={7}
                                          alignSelf={"center"}
                                       />
                                    </chakra.a>
                                 </Tooltip>
                              </Flex>

                              <Flex
                                 justifyContent="space-between"
                                 alignContent="center"
                              >
                                 <Rating rating={rating.rate} numReviews={0} />
                                 <Box
                                    fontSize="2xl"
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    color={useColorModeValue(
                                       "gray.800",
                                       "white"
                                    )}
                                 >
                                    <Box
                                       as="span"
                                       color={"gray.600"}
                                       fontSize="lg"
                                    >
                                       £
                                    </Box>

                                    {price}
                                 </Box>
                              </Flex>
                           </Box>
                        </SwiperSlide>
                     </Box>
                  );
               })}
            </Swiper>
         </Flex>
      </>
   );
}

export default Card;
