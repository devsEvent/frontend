import { useEffect } from "react";

function head({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, []);
}

export default head;
