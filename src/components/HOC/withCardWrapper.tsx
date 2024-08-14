const withCardWrapper = (WrappedComponent: any) => {
    return (props:any) => {
      return (
        <WrappedComponent {...props} />
      );
    };
  };
  
  export default withCardWrapper;
  