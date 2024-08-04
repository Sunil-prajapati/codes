interface User {
  readonly _id: number;
  email: string;
  useId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

// re-opening interface (type does not have this feature)
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const sunil: User = {
  _id: 344,
  email: "s@a.com",
  useId: 2,
  githubToken: "github",
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: "diwali", off: 6) => {
    return 100;
  },
};

const sunilAdmin: Admin = {
  _id: 344,
  email: "s@a.com",
  useId: 2,
  role: "learner",
  githubToken: "github",
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: "diwali", off: 6) => {
    return 100;
  },
};
