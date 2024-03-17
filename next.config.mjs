const nextConfig = () => {
  const rewrites = () => {
    return [
      {
        source: "/api",
        destination: "https://api.sparrow.arafas.com/conversations",
      },
    ];
  };
  return {
    rewrites,
  };
};

export default nextConfig;
