const invoiceModel = require("../../db/models").invoice;

const getUserInvoices = async (userID, data) => {
  try {
    const query = { userID: userID };
    const options = {
      page: data.page,
      limit: Number(data.limit),
      sort: { $natural: -1 },
      collation: {
        locale: "en",
      },
      customLabels: { docs: "invoices", totalDocs: "available" },
    };

    const invoices = await invoiceModel.paginate(query, options);
    return invoices;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

module.exports = {
  getUserInvoices,
};