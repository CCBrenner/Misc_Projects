function MakeUpdateQtyButtonVisible(id, visible) {
    const updateQtyButton = document.querySelector(`button[data-itemId="${id}"]`);
    updateQtyButton.style.visibility = visible ? "visible" : "hidden";
}
