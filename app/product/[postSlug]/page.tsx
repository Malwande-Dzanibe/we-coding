import React from "react";
import onePost from "@/utils/onePost";
import SinglePageContent from "@/components/SinglePageContent";

type Paramss = {
  params: { postSlug: string };
};

const page = async ({ params }: Paramss) => {
  const postSlugg = params.postSlug;

  const post = await onePost(postSlugg);

  return (
    <div className="wrapper">
      <SinglePageContent post={post} />
    </div>
  );
};

export default page;
