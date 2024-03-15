export default function Footer() {
  return (
    <footer className="w-full border-t border-t-foreground/10 pt-8 flex-1 flex flex-col justify-center space-y-5 text-center text-xs">
      <div>
        <p>
          <div className="pb-8 border-b">
          Team - The Autists{" "}
          <br />
          <a
            href="https://alphabyte2024.tech/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            AlphaByte Hackathon 2024
          </a>
          </div>
          <div className="pt-[10vmin] md:-bottom-20">
            <div className="max-w-7xl mx-auto">
              <svg
                className="svg-responsive"
                viewBox="0 0 1696 308"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M292.24 19.2H261.84V268.86L222.7 308H69.94L30.8 268.86V19.2H0.4V4H148.6V19.2H118.2V292.8H214.34L244.74 262.4V19.2H214.34V4H292.24V19.2ZM635.808 19.2H605.408V308H502.808L358.788 19.2V292.8H389.188V308H311.288V292.8H341.688V19.2H311.288V4H444.288L588.308 292.8V19.2H557.908V4H635.808V19.2ZM799.038 4V19.2H768.638V292.8H799.038V308H650.838V292.8H681.238V19.2H650.838V4H799.038ZM825.52 43.14L864.66 4H1014.76L1041.36 30.6V0.199976H1058.46V102.8H1041.36V54.16L1006.4 19.2H912.92V292.8H1015.14L1049.34 258.6L1061.12 270.38L1023.5 308H864.66L825.52 268.86V43.14ZM1414.04 292.8V308H1256.72V292.8H1297.38L1265.46 194H1160.2L1127.9 292.8H1166.66V308H1083.82V292.8H1109.66L1203.52 4H1294.34L1388.2 292.8H1414.04ZM1260.52 178.8L1212.64 32.12L1165.14 178.8H1260.52ZM1453.81 91.4H1436.71V4H1695.11V91.4H1678.01V19.2H1609.61V292.8H1640.01V308H1491.81V292.8H1522.21V19.2H1453.81V91.4Z"
                  fill="#374375"
                />
              </svg>
            </div>
          </div>
        </p>
      </div>
    </footer>
  );
}