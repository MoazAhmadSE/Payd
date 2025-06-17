import { useMemo } from "react";

export const usePaymentIssues = (paymentErrors = {}) => {
    const issue = useMemo(
        () => ({
            "customerErrors": {
                color: "rgba(255, 187, 79, 1)",
                symbol: "a",
                errorCount: paymentErrors.CustomerErrors || 0,
            },
            "fraudBlocks": {
                color: "rgba(255, 218, 147, 1)",
                symbol: "x",
                errorCount: paymentErrors.FraudBlocks || 0,
            },
            "bankErrors": {
                color: "rgba(255, 117, 118, 1)",
                symbol: "o",
                errorCount: paymentErrors.BankErrors || 0,
            },
            "systemErrors": {
                color: "rgba(128, 224, 229, 1)",
                symbol: "n",
                errorCount: paymentErrors.SystemErrors || 0,
            },
        }),
        [paymentErrors]
    );

    const issueData = useMemo(
        () =>
            Object.entries(issue).map(([name, obj]) => ({
                name,
                symbol: obj.symbol,
                errorCount: obj.errorCount,
                fill: obj.color,
            })),
        [issue]
    );

    const totalErrors = useMemo(
        () =>
            Object.values(paymentErrors).reduce(
                (acc, val) => acc + (val || 0),
                0
            ),
        [paymentErrors]
    );

    return {
        issueData,
        totalErrors,
        issue,
    };
};
