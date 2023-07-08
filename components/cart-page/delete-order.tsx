"use client";

export function DeleteOrder(id: number, deleteAction: (id: number) => void) {
  return (
    <button onClick={() => deleteOrder(id, deleteAction)}>
      <DeleteIcon />
    </button>
  );
}
