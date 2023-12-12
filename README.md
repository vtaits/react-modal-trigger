# react-modal-trigger

[![NPM](https://img.shields.io/npm/v/react-modal-trigger.svg)](https://www.npmjs.com/package/react-modal-trigger)
![dependencies status](https://img.shields.io/librariesio/release/npm/react-modal-trigger)

Easy render of buttons that open modals. This encapsulates the creation of the modal state as well as the open and close callbacks.

## Example

```tsx
<ModalTrigger
  renderModal={({ handleClose, isOpen }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div
        role="dialog"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          backgroundColor: "#fff",
          transform: "translateX(-50%) translateY(-50%)",
          padding: "20px",
          boxShadow: "0px 0px 8px 6px rgba(0, 0, 0, 0.15)",
        }}
      >
        <p>Content</p>

        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    );
  }}
  renderTrigger={({ handleOpen, isOpen }) => (
    <button disabled={isOpen} type="button" onClick={handleOpen}>
      Open
    </button>
  )}
/>
```

## Props

- `initiallyOpen` - `boolean`, optional, `false` by default;
- `renderModal` - render function of the modal;
- `renderTrigger` - render function of the element that triggers modal opening.
