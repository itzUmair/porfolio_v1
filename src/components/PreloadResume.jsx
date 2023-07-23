const PreloadPDF = () => {
  const preloadPDF = async () => {
    try {
      const resumeURL =
        "https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Umair_CV%20(1).pdf?alt=media&token=63a6b067-8ad1-41eb-9d1a-7ba1867fd9d9";
      await fetch(resumeURL);
    } catch (error) {
      console.error("Error preloading PDF:", error);
    }
  };

  return <>{preloadPDF()}</>;
};

export default PreloadPDF;
