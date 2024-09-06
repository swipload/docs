import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/freights/swipload-integrations-api",
    },
    {
      type: "category",
      label: "Consignment",
      link: {
        type: "doc",
        id: "api/freights/consignment",
      },
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "api/freights/consignment-get",
          label: "ConsignmentGet",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Freight",
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "api/freights/freight-create",
          label: "Create a freight",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/freights/freight-update-freight",
          label: "FreightUpdateFreight",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freights/freight-patch-update-status",
          label: "Update freight status using patch",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freights/freight-patch-carriers-reference",
          label: "Update Carriers Reference",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freights/freight-patch-shippers-reference",
          label: "Update Shippers Reference",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Shipment",
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "api/freights/shipment-create",
          label: "Create a Shipment",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
