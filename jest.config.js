module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/pageObjects/.*"],
    testTimeout: 200000
};
