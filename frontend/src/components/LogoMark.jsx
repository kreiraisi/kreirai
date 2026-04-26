export default function LogoMark({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="kGrad" x1="0" y1="0" x2="56" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FF2080" />
          <stop offset="48%"  stopColor="#9B2FFF" />
          <stop offset="100%" stopColor="#4466FF" />
        </linearGradient>
      </defs>
      {/*
        K shape — traced to match the logo letterform:
        · Vertical bar: x 0–17
        · Upper arm: outer edge (17,20)→(44,2), inner edge (17,30) via notch (30,33)
        · Lower arm: mirror of upper arm
        · Slight rounded corners on exterior tips
      */}
      <path
        fill="url(#kGrad)"
        d="
          M 3 0
          Q 0 0 0 3
          L 0 63
          Q 0 66 3 66
          L 14 66
          Q 17 66 17 63
          L 17 46
          L 42 63
          Q 45 67 50 66
          L 53 66
          Q 57 65 55 60
          L 30 33
          L 55 6
          Q 57 1 53 0
          L 50 0
          Q 45 -1 42 3
          L 17 20
          L 17 3
          Q 17 0 14 0
          Z
        "
      />
    </svg>
  );
}
