function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <path
        d="M1.93524 9L10.6962 1.99951C11.4274 1.41516 12.4666 1.41516 13.1979 1.99951L21.9588 9"
        stroke="#C5C5C5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.42165 3.04943L5.41693 6.29943C4.68983 6.88951 4.32627 7.18455 4.13191 7.5924C3.93756 8.00025 3.93756 8.46813 3.93756 9.4039V13C3.93756 16.7712 3.93756 18.6569 5.11051 19.8284C6.28347 21 8.17131 21 11.947 21C15.7226 21 17.6106 21 18.7834 19.8284C19.9564 18.6569 19.9564 16.7712 19.9564 13V9.4039C19.9564 8.46813 19.9564 8.00025 19.7621 7.5924C19.5677 7.18455 19.2041 6.88951 18.4771 6.29943L14.4724 3.04943C13.2627 2.06777 12.6579 1.57694 11.947 1.57694C11.2361 1.57694 10.6312 2.06777 9.42165 3.04943Z"
        stroke="#C5C5C5"
        strokeWidth="1.5"
      />
      <path d="M9.69434 15.25H14.1996" stroke="#C5C5C5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default HomeIcon;
