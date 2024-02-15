import { Container, Flex, Heading, Text } from "@radix-ui/themes";
// import { ThemePanel } from "@radix-ui/themes";

const NavBar = () => {
  return (
    <Flex
      className="space-x-6 border-b mb-5 px-5 h-16 items-center sticky top-0 z-50 bg-slate-100"
      direction={"column"}
      align={"center"}
    >
      <Flex direction={"column"} align={"center"}>
        <Heading className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-400">
          通过检索增强生成增强组织的文档智能
        </Heading>
        <Text>上传您的文档并通过检索增强生成与他们对话</Text>
      </Flex>
      {/* <ThemePanel /> */}
    </Flex>
  );
};

export default NavBar;
