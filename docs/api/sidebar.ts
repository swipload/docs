import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/swipload-integrations-api",
    },
    {
      type: "category",
      label: "Freight",
      items: [
        {
          type: "doc",
          id: "api/freight-create",
          label: "Create a freight",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/freight-update-freight",
          label: "FreightUpdateFreight",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freight-patch-update-status",
          label: "Update freight status using patch",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freight-patch-carriers-reference",
          label: "Update Carriers Reference",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freight-patch-shippers-reference",
          label: "Update Shippers Reference",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/freight-add-carrier-settlement",
          label: "Create or update carrier freight cost settlement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/freight-upload-freight-attachment",
          label: "FreightUploadFreightAttachment",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Requirement",
      items: [
        {
          type: "doc",
          id: "api/requirement-get-list",
          label: "Get the available freight requirements list",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Shipment",
      items: [
        {
          type: "doc",
          id: "api/shipment-create",
          label: "Create a Shipment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/shipment-add-carrier-settlement",
          label: "Create or update carrier shipment cost settlement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/shipment-confirm-carrier-settlement",
          label: "Confirm carrier shipment settlement",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
