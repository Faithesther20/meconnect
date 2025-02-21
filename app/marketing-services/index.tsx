import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { secondaryColor } from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
// import PromotionCard from "@/components/MarketingServicesComp/ProductCard";
// import ProductCard from "@/components/MarketingServicesComp/PromotionCard";
import PromotionList from "@/components/MarketingServicesComp/PromotionList";
import { Product, Promotion } from "@/types";
import { ActivityIndicator } from "react-native";
import ProductList from "@/components/MarketingServicesComp/ProductList";
// import ProductCard from "@/components/MarketingServicesComp/ProductCard";
// import PromotionCard from "@/components/MarketingServicesComp/PromotionCard";


export default function marketing() {
  const router = useRouter();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [productloading, setProductLoading] = useState<boolean>(true);
  const [menuVisible, setMenuVisible] = useState(false);


  const handleEdit = () => {
    router.push({ pathname: "/marketing-services/about/edit"});
  };
  const handleTrainingClicked= (id: string) => {
    //console.log(`Edit product with id: ${id}`);
     router.push({ pathname: "/marketing-services/training/detail/[id]", params: { id } });
  };

  useEffect(() => {
    setLoading(true);
    setProductLoading(true);
    
    Promise.all([
      new Promise<Promotion[]>(resolve =>
        setTimeout(() => resolve([
          { id: "1", imageKey: "promotion_banner" },
          { id: "2", imageKey: "promotion_banner" },
          { id: "3", imageKey: "promotion_banner" }
        ]), 1000)
      ),
      new Promise<Product[]>(resolve =>
        setTimeout(() => resolve([
          { id: "1", name: "Air Conditioning System", image: images.aircondition },
          { id: "2", name: "Air Conditioning System", image: images.aircondition },
          { id: "3", name: "Air Conditioning System", image: images.aircondition }
        ]), 1500)
      )
    ]).then(([fetchedPromotions, fetchedProducts]) => {
      setPromotions(fetchedPromotions);
      setLoading(false);
      setProducts(fetchedProducts);
      setProductLoading(false);
    });
  }, []);
  

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 bg-primary p-4 relative">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Image source={images.logo} className="h-10 w-28" />
            <View className="flex-row gap-4 items-center">
              <View className="relative">
                <View
                  className="absolute top-0 left-3 w-5 h-5 rounded-full bg-black flex-row justify-center items-center"
                  style={{ zIndex: 10, elevation: 10 }}>
                  <Text className="text-white text-xs">5</Text>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="bell-outline"
                    size={26}
                    color={secondaryColor}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                <Feather name="menu" size={26} color={secondaryColor} />
              </TouchableOpacity>
            </View>
          </View>



{/*Menue section */}
         {
          menuVisible && (
            <View className="absolute  top-3 right-3 rounded-2xl bg-white  w-full "style={{ zIndex: 10, elevation: 2 }}>
            <View  className="p-5 py-8 flex-row justify-between items-center">
              <Text className="text-secondary text-lg font-bold">
                Hi, James Daniel
              </Text>
            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <Feather name="x-square" size={26} color={secondaryColor} />

            </TouchableOpacity>
            </View>
            <View className="w-full border border-b-black border-1  bg-black"></View>
            <View className="px-5 pb-8">
              <TouchableOpacity className="flex-row justify-between items-center py-5 border-b-2 border-gray-300" 
              onPress={() => router.push({ pathname: "/admin-services/manage_machines" })}>
                <Text>
                Manage Machines
                </Text>
                <AntDesign name="rightsquareo" size={24} color={secondaryColor} />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-between items-center py-5 border-b-2 border-gray-300"
               onPress={() => router.push({ pathname: "/admin-services/manage_services" })}>
                <Text>
                Service request
                </Text>
                <AntDesign name="rightsquareo" size={24} color={secondaryColor} />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-between items-center py-5 border-b-2 border-gray-300"
               onPress={() => router.push({ pathname: "/marketing-services/training/show" })}>
                <Text>
                Training schedules

                </Text>
                <AntDesign name="rightsquareo" size={24} color={secondaryColor} />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-between items-center py-5 ">
                <Text>
                {/* Manage Machines */}
                </Text>
              
              </TouchableOpacity>
            </View>
           
          </View>
          )
         }

          {/* Section */}
          <View className="mt-7 flex-row justify-between items-center">
            <View className="flex-row gap-2">
              <View className="bg-secondary w-2 rounded" />
              <Text className="font-bold text-lg">Promotions</Text>
            </View>
            <TouchableOpacity  onPress={() => router.push({ pathname: "/marketing-services/promotion/show" })}> 
              <Text className="text-sm text-secondary ">View All </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-2">
            {loading ? (
              <ActivityIndicator size="large" color={secondaryColor} />
            ) : (
              <PromotionList promotions={promotions} />
            )}
          </View>

          {/* Product Section */}
          <View className="mt-5 flex-row justify-between items-center">
            <View className="flex-row gap-2">
              <View className="bg-secondary w-2 rounded" />
              <Text className="font-bold text-lg">Products</Text>
            </View>
            <TouchableOpacity  onPress={() => router.push({ pathname: "/marketing-services/product/show" })}>
              <Text className="text-sm text-secondary ">View All </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-1">
            {productloading ? (
              <ActivityIndicator size="large" color={secondaryColor} />
            ) : (
              <ProductList products={products} />
            )}
          </View>


          {/* Upcomming trainging Section */}
          <View className="mt-8 flex-row justify-between items-center">
            <View className="flex-row gap-2">
              <View className="bg-secondary w-2 rounded" />
              <Text className="font-bold text-lg">Upcoming Trainings</Text>
            </View>
            <TouchableOpacity   onPress={() => router.push({ pathname: "/marketing-services/training/show" })}>
              <Text className="text-sm text-secondary ">View All </Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white px-5 py-2 mt-5 rounded-lg">
            <View className="flex-row justify-between items-center py-3">
              <Text className="font-bold text-lg">
                Products & Operation Training
              </Text>
              <TouchableOpacity>
                <Text className="text-md underline text-secondary">
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between items-center gap-3 py-2">
              <View className="px-3 py-1 rounded border">
                <Text className="text-sm font-bold text-secondary text-center">
                  19
                </Text>
                <Text className="text-sm font-bold text-secondary  text-center">
                  Apr
                </Text>
              </View>

              <View className="flex-1">
                <Text className="font-bold text-lg" numberOfLines={1}>
                  Webinar
                </Text>
                <Text className="text-sm text-gray-500">
                  Reg closes on: 14 Apr
                </Text>
              </View>
              <TouchableOpacity   onPress={() => handleTrainingClicked('1')}>
                <AntDesign name="rightsquareo" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between items-center gap-3 py-2">
              <View className="px-3 py-1 rounded border">
                <Text className="text-sm font-bold text-secondary text-center">
                  28
                </Text>
                <Text className="text-sm font-bold text-secondary  text-center">
                  Apr
                </Text>
              </View>

              <View className="flex-1">
                <Text className="font-bold text-lg" numberOfLines={1}>
                  Classroom Training: Coimbatore
                </Text>
                <Text className="text-sm text-gray-500">
                  Reg closes on: 23 Apr Available:{" "}
                  <Text className="text-secondary">0 seats</Text>
                </Text>
              </View>
              <TouchableOpacity    onPress={() => handleTrainingClicked('1')}>
                <AntDesign name="rightsquareo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-white px-5 py-2 mt-5 rounded-lg">
            <View className="flex-row justify-between items-center py-3">
              <Text className="font-bold text-lg">
                Products & Operation Training
              </Text>
              <TouchableOpacity>
                <Text className="text-md underline text-secondary">
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between items-center gap-3 py-2">
              <View className="px-3 py-1 rounded border">
                <Text className="text-sm font-bold text-secondary text-center">
                  19
                </Text>
                <Text className="text-sm font-bold text-secondary  text-center">
                  Apr
                </Text>
              </View>

              <View className="flex-1">
                <Text className="font-bold text-lg" numberOfLines={1}>
                  Webinar
                </Text>
                <Text className="text-sm text-gray-500">
                  Reg closes on: 14 Apr
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleTrainingClicked('1')}>
                <AntDesign name="rightsquareo" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between items-center gap-3 py-2">
              <View className="px-3 py-1 rounded border">
                <Text className="text-sm font-bold text-secondary text-center">
                  28
                </Text>
                <Text className="text-sm font-bold text-secondary  text-center">
                  Apr
                </Text>
              </View>

              <View className="flex-1">
                <Text className="font-bold text-lg" numberOfLines={1}>
                  Classroom Training: Coimbatore
                </Text>
                <Text className="text-sm text-gray-500">
                  Reg closes on: 23 Apr Available:{" "}
                  <Text className="text-secondary">0 seats</Text>
                </Text>
              </View>
              <TouchableOpacity   onPress={() => handleTrainingClicked('1')}>
                <AntDesign name="rightsquareo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-white px-5 py-2 mt-5 rounded-lg">
            <View className="flex-row justify-between items-center py-3">
              <Text className="font-bold text-lg">
                Products & Operation Training
              </Text>
              <TouchableOpacity>
                <Text className="text-md underline text-secondary">
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between items-center gap-3 py-2">
              <View className="px-3 py-1 rounded border">
                <Text className="text-sm font-bold text-secondary text-center">
                  19
                </Text>
                <Text className="text-sm font-bold text-secondary  text-center">
                  Apr
                </Text>
              </View>

              <View className="flex-1">
                <Text className="font-bold text-lg" numberOfLines={1}>
                  Webinar
                </Text>
                <Text className="text-sm text-gray-500">
                  Reg closes on: 14 Apr
                </Text>
              </View>
              <TouchableOpacity   onPress={() => handleTrainingClicked('1')}>
                <AntDesign name="rightsquareo" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between items-center gap-3 py-2">
              <View className="px-3 py-1 rounded border">
                <Text className="text-sm font-bold text-secondary text-center">
                  28
                </Text>
                <Text className="text-sm font-bold text-secondary  text-center">
                  Apr
                </Text>
              </View>

              <View className="flex-1">
                <Text className="font-bold text-lg" numberOfLines={1}>
                  Classroom Training: Coimbatore
                </Text>
                <Text className="text-sm text-gray-500">
                  Reg closes on: 23 Apr Available:{" "}
                  <Text className="text-secondary">0 seats</Text>
                </Text>
              </View>
              <TouchableOpacity  onPress={() => handleTrainingClicked('1')}>
                <AntDesign name="rightsquareo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-white px-5 py-2 mt-5 rounded-lg">
            <View className="flex-row justify-between items-center py-3">
              <Text className="font-bold text-lg">
                Products & Operation Training
              </Text>
              <TouchableOpacity>
                <Text className="text-md underline text-secondary">
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between items-center gap-3 py-2">
              <View className="px-3 py-1 rounded border">
                <Text className="text-sm font-bold text-secondary text-center">
                  19
                </Text>
                <Text className="text-sm font-bold text-secondary  text-center">
                  Apr
                </Text>
              </View>

              <View className="flex-1">
                <Text className="font-bold text-lg" numberOfLines={1}>
                  Webinar
                </Text>
                <Text className="text-sm text-gray-500">
                  Reg closes on: 14 Apr
                </Text>
              </View>
              <TouchableOpacity    onPress={() => handleTrainingClicked('1')}>
                <AntDesign name="rightsquareo" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between items-center gap-3 py-2">
              <View className="px-3 py-1 rounded border">
                <Text className="text-sm font-bold text-secondary text-center">
                  28
                </Text>
                <Text className="text-sm font-bold text-secondary  text-center">
                  Apr
                </Text>
              </View>

              <View className="flex-1">
                <Text className="font-bold text-lg" numberOfLines={1}>
                  Classroom Training: Coimbatore
                </Text>
                <Text className="text-sm text-gray-500">
                  Reg closes on: 23 Apr Available:{" "}
                  <Text className="text-secondary">0 seats</Text>
                </Text>
              </View>
              <TouchableOpacity    onPress={() => handleTrainingClicked('1')}>
                <AntDesign name="rightsquareo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
         

          {/*About Mitsubishi Section */}
          <View className="mt-8 flex-row justify-between items-center">
            <View className="flex-row gap-2">
              <View className="bg-secondary w-2 rounded" />
              <Text className="font-bold text-lg">About Mitsubishi</Text>
            </View>
            <TouchableOpacity onPress={handleEdit}>
               <FontAwesome name="edit" size={26} color={secondaryColor} />
            </TouchableOpacity>
          </View>

          <View>
            <View className="w-full relative rounded-2xl mt-5">
              <Image className="w-full h-[6.25rem] rounded-lg" source={images.company} resizeMode="cover"/>
              
              <TouchableOpacity  className="absolute bottom-2 right-3  bg-white rounded " >
              <AntDesign name="rightsquareo" size={26} color={secondaryColor} />
              </TouchableOpacity>
              <Text className="text-white font-bold text-[1.3rem]  absolute top-[40%] left-[30%]">Our Company</Text>
            </View>
            <View className="w-full relative rounded-2xl mt-5">
              <Image className="w-full h-[6.25rem] rounded-lg" source={images.news} resizeMode="cover"/>
              
              <TouchableOpacity  className="absolute bottom-2 right-3  bg-white rounded " >
              <AntDesign name="rightsquareo" size={26} color={secondaryColor} />
              </TouchableOpacity>
              <Text className="text-white font-bold text-[1.3rem]  absolute top-[40%] left-[40%]">
                News
              </Text>
            </View>
            <View className="w-full relative rounded-2xl mt-5">
              <Image className="w-full h-[6.25rem] rounded-lg" source={images.location} resizeMode="cover"/>
              
              <TouchableOpacity  className="absolute bottom-2 right-3  bg-white rounded " >
              <AntDesign name="rightsquareo" size={26} color={secondaryColor} />
              </TouchableOpacity>
              <Text className="text-white font-bold text-[1.3rem]  absolute top-[40%] left-[40%]">Location</Text>
            </View>
           
          </View>
          <View className="flex-col justify-center items-center mt-10">
            <Image source={images.logo} className=""/>
            <Text className="font-bold text-center">MITSUBISHI ELECTRIC {'\n'}
            INDIA PVT. LTD</Text>
            <Link className="mt-2 bg-black text-white p-3 rounded text-center" href="https://www.mitsubishielectric.in">www.mitsubishielectric.in</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
