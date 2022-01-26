import axios from "axios";

export const getOffersFromDaemon = async (keyword = "", offset = 0) => {
  try {
    const res = await axios.post("/json_rpc", {
      jsonrpc: "2.0",
      id: "0",
      method: "marketplace_global_get_offers_ex",
      params: {
        filter: {
          amount_low_limit: 0,
          amount_up_limit: 0,
          bonus: false,
          category: "",
          fake: false,
          keyword,
          limit: 100,
          location_city: "",
          location_country: "",
          offer_type_mask: 0,
          offset,
          order_by: 0,
          primary: "",
          rate_low_limit: "0.000000",
          rate_up_limit: "0.000000",
          reverse: false,
          target: "",
          timestamp_start: 0,
          timestamp_stop: 0,
        },
      },
    });
    return {
      offers: res.data.result.offers,
      total_offers: res.data.result.total_offers,
    };
  } catch (err) {
    console.error("fetch error", err);
  }
};
