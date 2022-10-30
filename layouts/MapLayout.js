export const MapLayout = ({ children, title }) => {
  return (
    <>
      <p>Header</p>
      {children}
      <p>Footer</p>
    </>
  );
};

export const getLayout = (page, { title }) => {
  return <MapLayout title={title}>{page}</MapLayout>;
};
