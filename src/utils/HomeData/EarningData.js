export const getEarningsData = (range) => {
    const earnings = {
        "today": [
            { timestamp: "2025-05-27T08:00:00Z", NGN: 25.50 },
            { timestamp: "2025-05-27T10:00:00Z", NGN: 40.00 },
            { timestamp: "2025-05-27T12:00:00Z", NGN: 55.75 },
            { timestamp: "2025-05-27T15:00:00Z", NGN: 30.00 },
            { timestamp: "2025-05-27T17:00:00Z", NGN: 20.00 },
        ],

        "thisWeek": [
            { timestamp: "2025-05-25T00:00:00Z", NGN: 20100.00 },
            { timestamp: "2025-05-22T00:00:00Z", NGN: 15000.00 },
            { timestamp: "2025-05-21T00:00:00Z", NGN: 12000.00 },
            { timestamp: "2025-05-24T00:00:00Z", NGN: 18000.00 },
            { timestamp: "2025-05-23T00:00:00Z", NGN: 9000.00 },
            { timestamp: "2025-05-26T00:00:00Z", NGN: 13000.00 },
            { timestamp: "2025-05-27T00:00:00Z", NGN: 17000.00 },
        ],

        "last2Weeks": [
            { timestamp: "2025-05-14T00:00:00Z", NGN: 80.00 },
            { timestamp: "2025-05-15T00:00:00Z", NGN: 95.00 },
            { timestamp: "2025-05-16T00:00:00Z", NGN: 150.00 },
            { timestamp: "2025-05-17T00:00:00Z", NGN: 110.00 },
            { timestamp: "2025-05-18T00:00:00Z", NGN: 200.00 },
            { timestamp: "2025-05-19T00:00:00Z", NGN: 130.00 },
            { timestamp: "2025-05-20T00:00:00Z", NGN: 170.00 },
            { timestamp: "2025-05-21T00:00:00Z", NGN: 140.00 },
            { timestamp: "2025-05-22T00:00:00Z", NGN: 130.00 },
            { timestamp: "2025-05-23T00:00:00Z", NGN: 160.00 },
            { timestamp: "2025-05-24T00:00:00Z", NGN: 190.00 },
            { timestamp: "2025-05-25T00:00:00Z", NGN: 155.00 },
            { timestamp: "2025-05-26T00:00:00Z", NGN: 220.00 },
            { timestamp: "2025-05-27T00:00:00Z", NGN: 180.00 }
        ],

        "thisMonth": [
            { timestamp: "2025-05-01T00:00:00Z", NGN: 450.00 },
            { timestamp: "2025-05-08T00:00:00Z", NGN: 620.00 },
            { timestamp: "2025-05-15T00:00:00Z", NGN: 710.00 },
            { timestamp: "2025-05-22T00:00:00Z", NGN: 830.00 }
        ],

        // "thisYear": [
        //     { timestamp: "2025-01-01T00:00:00Z", NGN: 3200.00 },
        //     { timestamp: "2025-02-01T00:00:00Z", NGN: 4100.00 },
        //     { timestamp: "2025-03-01T00:00:00Z", NGN: 3800.00 },
        //     { timestamp: "2025-04-01T00:00:00Z", NGN: 4500.00 },
        //     { timestamp: "2025-05-01T00:00:00Z", NGN: 3000.00 },
        //     { timestamp: "2025-06-01T00:00:00Z", NGN: 4100.00 },
        //     { timestamp: "2025-07-01T00:00:00Z", NGN: 3200.00 },
        //     { timestamp: "2025-08-01T00:00:00Z", NGN: 4500.00 },
        //     { timestamp: "2025-09-01T00:00:00Z", NGN: 3800.00 },
        //     { timestamp: "2025-10-01T00:00:00Z", NGN: 3000.00 },
        //     { timestamp: "2025-11-01T00:00:00Z", NGN: 3000.00 },
        //     { timestamp: "2025-12-01T00:00:00Z", NGN: 4500.00 }
        // ],

        "lifetime": [
            { timestamp: "2025-01-01T00:00:00Z", NGN: 8700.00 },
            { timestamp: "2024-01-01T00:00:00Z", NGN: 25100.00 },
            { timestamp: "2023-01-01T00:00:00Z", NGN: 20950.00 },
            { timestamp: "2022-01-01T00:00:00Z", NGN: 15200.00 },
        ]
    };

    const records = earnings[range];

    if (!records) {
        return {
            status: "fail",
            message: `No data found for range "${range}"`,
            range,
            data: []
        };
    }

    return {
        status: "success",
        range,
        data: records.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
    };
};
