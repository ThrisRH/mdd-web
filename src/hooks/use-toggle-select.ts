import { useState } from "react";

export function useToggleSelect() {
  const [selectedDeleteItems, setSelectedDeleteItems] = useState<number[]>([]);
  const toggleSelect = (id: number) => {
    setSelectedDeleteItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return { selectedDeleteItems, toggleSelect };
}
