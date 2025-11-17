import Api from "../Api";

export function savePackPlan(packsPlan) {
  return Api.post("/packs-plans", {
    body: packsPlan,
  });
}

export function updatePackPlan(pricePlan) {
  return Api.put("/packs-plans", {
    body: pricePlan,
  });
}

export function getPackPlans(params = {}) {
  const { search, page, sort } = params;

  return Api.get("/packs-plans", {
    params: {
      search,
      page,
      sort,
    },
    // filter: "is_deleted:0",
  });
}

export function deletePackPlan(id) {
  return Api.put(`/packs-plans/${id}`, {
    body: {
      is_deleted: 1,
    },
  });
}
