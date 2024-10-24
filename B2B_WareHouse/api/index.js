var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  handleDataRequest: () => handleDataRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_remix = require("@mantine/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), handleDataRequest = async (response, { request }) => {
  let isGet = request.method.toLowerCase() === "get", isPrefetch = (request.headers.get("Purpose") || request.headers.get("X-Purpose") || request.headers.get("Sec-Purpose") || request.headers.get("Sec-Fetch-Purpose") || request.headers.get("Moz-Purpose")) === "prefetch";
  return isGet && isPrefetch && !response.headers.has("Cache-Control") && response.headers.set("Cache-Control", "private, max-age=5"), response;
}, server = (0, import_remix.createStylesServer)();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 37,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${(0, import_remix.injectStyles)(markup, server)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  Document: () => Document,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_core3 = require("@mantine/core"), import_modals = require("@mantine/modals"), import_notifications3 = require("@mantine/notifications"), import_remix2 = require("@mantine/remix"), import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/components/404.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FourOhFour() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page_404_body",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "page_404_div",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png",
            alt: "404"
          }, void 0, !1, {
            fileName: "app/components/404.tsx",
            lineNumber: 8,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/404.tsx",
          lineNumber: 7,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Sorry!"
            }, void 0, !1, {
              fileName: "app/components/404.tsx",
              lineNumber: 14,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Either you aren't cool enough to visit this page or it doesn't exist",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                  children: ". . . like your social life."
                }, void 0, !1, {
                  fileName: "app/components/404.tsx",
                  lineNumber: 17,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/404.tsx",
              lineNumber: 15,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
              to: "/",
              prefetch: "intent",
              children: "You can go now!"
            }, void 0, !1, {
              fileName: "app/components/404.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/404.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/404.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/404.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/context/SupplierCartContext.tsx
var import_solid = require("@heroicons/react/24/solid"), import_core = require("@mantine/core"), import_notifications = require("@mantine/notifications"), import_react4 = require("@remix-run/react"), React2 = __toESM(require("react"));

// app/utils/hooks.ts
var import_react3 = require("@remix-run/react"), React = __toESM(require("react"));
function useMatchesData(routeId) {
  let matchingRoutes = (0, import_react3.useMatches)(), route = React.useMemo(
    () => matchingRoutes.find((route2) => route2.id === routeId),
    [matchingRoutes, routeId]
  );
  return route == null ? void 0 : route.data;
}
function useOptionalUser() {
  return useMatchesData("root");
}
function useAppData() {
  return useMatchesData("routes/__app");
}
function useStoreAppData() {
  return useMatchesData("routes/store");
}
function useInventory(slug) {
  let { inventories: suppliers } = useStoreAppData();
  return suppliers.find((supplier2) => supplier2.slug === slug);
}
function useInventoryItem(slug) {
  let { items } = useStoreAppData();
  return items.find((item2) => item2.slug === slug);
}
function useUser() {
  let { user } = useOptionalUser();
  if (!user)
    throw new Error("You must be logged in to use this hook");
  return { user };
}
function useSupplier(slug) {
  let { inventories: suppliers } = useAppData();
  return suppliers.find((supplier2) => supplier2.slug === slug);
}
function useItem(slug) {
  let { items } = useAppData();
  return items.find((item2) => item2.slug === slug);
}
function useLocalStorageState({
  key,
  defaultValue
}) {
  let [value, setValue] = React.useState(defaultValue);
  return React.useEffect(() => {
    let localStorageValue = window.localStorage.getItem(key);
    if (!localStorageValue) {
      setValue(defaultValue);
      return;
    }
    setValue(JSON.parse(localStorageValue));
  }, []), React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]), [value, setValue];
}

// app/context/SupplierCartContext.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LocalStorageKey = "inventory-management-cart", SupplierCartContext = React2.createContext(
  void 0
);
function SupplierCartProvider({ children }) {
  let [items, setItems] = useLocalStorageState({
    key: LocalStorageKey,
    defaultValue: []
  }), totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ), clearCart = React2.useCallback(() => {
    (0, import_notifications.cleanNotifications)(), setItems([]), (0, import_notifications.showNotification)({
      title: "Successfully cleared",
      message: "All items in the cart are cleared",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.CheckCircleIcon, {
        className: "h-7 w-7"
      }, void 0, !1, {
        fileName: "app/context/SupplierCartContext.tsx",
        lineNumber: 51,
        columnNumber: 10
      }, this),
      color: "green"
    });
  }, [setItems]), addItemToCart = React2.useCallback(
    (item) => {
      let isOrderFromDifferentSupplier = items.some(
        (cartItem) => cartItem.supplierId !== item.supplierId
      ), isAlreadyInCart = items.some((i) => i.id === item.id);
      if ((0, import_notifications.cleanNotifications)(), isOrderFromDifferentSupplier) {
        (0, import_notifications.showNotification)({
          id: "different-supplier",
          title: "Order from different supplier",
          message: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "space-y-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "You can only order from one supplier at a time"
              }, void 0, !1, {
                fileName: "app/context/SupplierCartContext.tsx",
                lineNumber: 71,
                columnNumber: 8
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.Button, {
                    variant: "subtle",
                    color: "red",
                    onClick: async () => {
                      clearCart(), (0, import_notifications.hideNotification)("different-supplier");
                    },
                    children: "Clear previous order"
                  }, void 0, !1, {
                    fileName: "app/context/SupplierCartContext.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.Button, {
                    component: import_react4.Link,
                    color: "blue",
                    to: "/cart",
                    size: "sm",
                    onClick: () => (0, import_notifications.hideNotification)("different-supplier"),
                    children: "View cart"
                  }, void 0, !1, {
                    fileName: "app/context/SupplierCartContext.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/context/SupplierCartContext.tsx",
                lineNumber: 72,
                columnNumber: 8
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/context/SupplierCartContext.tsx",
            lineNumber: 70,
            columnNumber: 7
          }, this),
          color: "blue",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.InformationCircleIcon, {
            className: "h-9 w-9"
          }, void 0, !1, {
            fileName: "app/context/SupplierCartContext.tsx",
            lineNumber: 97,
            columnNumber: 12
          }, this),
          autoClose: !1
        });
        return;
      }
      if (!isAlreadyInCart) {
        setItems((prev) => [...prev, item]), (0, import_notifications.showNotification)({
          title: "Successfully added",
          message: `Added ${item.name} to cart`,
          color: "green",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.CheckCircleIcon, {
            className: "h-9 w-9"
          }, void 0, !1, {
            fileName: "app/context/SupplierCartContext.tsx",
            lineNumber: 109,
            columnNumber: 12
          }, this)
        });
        return;
      }
      setItems((prevItems) => {
        let newItems = [...prevItems], index = newItems.findIndex((i) => i.id === item.id);
        return index > -1 && (newItems[index].quantity = newItems[index].quantity + item.quantity), newItems;
      }), (0, import_notifications.showNotification)({
        title: "Item already present in cart",
        message: `Quantity increased by ${item.quantity}`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.CheckCircleIcon, {
          className: "h-7 w-7"
        }, void 0, !1, {
          fileName: "app/context/SupplierCartContext.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        color: "green"
      });
    },
    [clearCart, items, setItems]
  ), removeItemFromCart = (itemId) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId)), (0, import_notifications.showNotification)({
      title: "Successfully removed",
      message: "Item removed from cart",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.MinusCircleIcon, {
        className: "h-7 w-7"
      }, void 0, !1, {
        fileName: "app/context/SupplierCartContext.tsx",
        lineNumber: 140,
        columnNumber: 10
      }, this),
      color: "red"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SupplierCartContext.Provider, {
    value: {
      itemsInCart: items,
      totalPrice,
      addItemToCart,
      removeItemFromCart,
      clearCart
    },
    children
  }, void 0, !1, {
    fileName: "app/context/SupplierCartContext.tsx",
    lineNumber: 146,
    columnNumber: 3
  }, this);
}
function useSupplierCart() {
  let context = React2.useContext(SupplierCartContext);
  if (!context)
    throw new Error("`useCart()` must be used within a <CartProvider />");
  return context;
}

// app/session.server.ts
var import_client4 = require("@prisma/client"), import_node = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/lib/user.server.ts
var import_client3 = require("@prisma/client"), bcrypt2 = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/utils/misc.ts
var import_client2 = require("@prisma/client"), bcrypt = __toESM(require("bcryptjs"));
function titleCase(string) {
  string = string.toLowerCase();
  let wordsArray = string.split(" ");
  for (var i = 0; i < wordsArray.length; i++)
    wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
  return wordsArray.join(" ");
}
function createPasswordHash(password2) {
  return bcrypt.hash(password2, 10);
}
function roleLookup(role) {
  return {
    [import_client2.Role.ADMIN]: "Admin",
    [import_client2.Role.CUSTOMER]: "Inventory",
    [import_client2.Role.STAFF]: "Supplier",
    [import_client2.Role.STORE_MANAGER]: "Store"
  }[role];
}

// app/lib/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: !0,
      firstName: !0,
      lastName: !0,
      email: !0,
      inventory: !0,
      hasResetPassword: !0
    }
  });
}
async function getUserByEmail(email2) {
  return prisma.user.findUnique({
    where: { email: email2 },
    select: {
      firstName: !0,
      lastName: !0,
      email: !0,
      inventory: !0
    }
  });
}
async function createUser({
  email: email2,
  password: password2,
  firstName,
  lastName,
  role = import_client3.Role.CUSTOMER
}) {
  return prisma.user.create({
    data: {
      firstName,
      lastName,
      email: email2,
      inventoryId: "",
      passwordHash: await createPasswordHash(password2),
      role
    }
  });
}
async function verifyLogin(email2, password2) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email: email2 }
  });
  if (!userWithPassword || !userWithPassword.passwordHash || !await bcrypt2.compare(password2, userWithPassword.passwordHash))
    return null;
  let { passwordHash: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId", USER_ROLE_KEY = "userRole", fourteenDaysInSeconds = 60 * 60 * 24 * 14, thirtyDaysInSeconds = 60 * 60 * 24 * 30;
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function requireUser(request, redirectTo = new URL(request.url).pathname) {
  let userId = await requireUserId(request, redirectTo), user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  role,
  remember = !1,
  redirectTo
}) {
  let session = await getSession(request);
  session.set(USER_SESSION_KEY, userId), session.set(USER_ROLE_KEY, role), console.log({
    userId,
    role
  });
  let _redirectTo = redirectTo;
  return role === import_client4.Role.ADMIN ? redirectTo = "/admin" : role === import_client4.Role.CUSTOMER ? redirectTo = "/" : role === import_client4.Role.STORE_MANAGER ? redirectTo = "/store" : role === import_client4.Role.STAFF && (redirectTo = "/staff"), (0, import_node.redirect)(_redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? fourteenDaysInSeconds : thirtyDaysInSeconds
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return session.unset(USER_SESSION_KEY), session.unset(USER_ROLE_KEY), (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function isCustomer(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === import_client4.Role.CUSTOMER;
}
async function isStaff(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === import_client4.Role.STAFF;
}
async function isStoreManager(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === import_client4.Role.STORE_MANAGER;
}
async function isAdmin(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === import_client4.Role.ADMIN;
}

// app/styles/app.css
var app_default = "/build/_assets/app-4N543W2I.css";

// appConfig.ts
var appConfig = {
  name: "Inventory Store Application",
  cardsLimit: 4,
  logo: "/logo-app.png"
}, appConfig_default = appConfig;

// app/context/InventoryCartContext.tsx
var import_solid2 = require("@heroicons/react/24/solid"), import_core2 = require("@mantine/core"), import_notifications2 = require("@mantine/notifications"), import_react5 = require("@remix-run/react"), React3 = __toESM(require("react"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LocalStorageKey2 = "warehouse-management-inventory-cart", SupplierCartContext2 = React3.createContext(
  void 0
);
function InventoryCartProvider({ children }) {
  let [items, setItems] = useLocalStorageState({
    key: LocalStorageKey2,
    defaultValue: []
  }), totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ), clearCart = React3.useCallback(() => {
    (0, import_notifications2.cleanNotifications)(), setItems([]), (0, import_notifications2.showNotification)({
      title: "Successfully cleared",
      message: "All items in the cart are cleared",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid2.CheckCircleIcon, {
        className: "h-7 w-7"
      }, void 0, !1, {
        fileName: "app/context/InventoryCartContext.tsx",
        lineNumber: 51,
        columnNumber: 10
      }, this),
      color: "green"
    });
  }, [setItems]), addItemToCart = React3.useCallback(
    (item) => {
      let isOrderFromDifferentRestaurant = items.some(
        (cartItem) => cartItem.supplierId !== item.supplierId
      ), isAlreadyInCart = items.some((i) => i.id === item.id);
      if ((0, import_notifications2.cleanNotifications)(), isOrderFromDifferentRestaurant) {
        (0, import_notifications2.showNotification)({
          id: "different-inventory",
          title: "Order from different inventory",
          message: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "space-y-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "You can only order from one inventory at a time"
              }, void 0, !1, {
                fileName: "app/context/InventoryCartContext.tsx",
                lineNumber: 71,
                columnNumber: 8
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.Button, {
                    variant: "subtle",
                    color: "red",
                    onClick: async () => {
                      clearCart(), (0, import_notifications2.hideNotification)("different-inventory");
                    },
                    children: "Clear previous order"
                  }, void 0, !1, {
                    fileName: "app/context/InventoryCartContext.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.Button, {
                    component: import_react5.Link,
                    color: "blue",
                    to: "/cart",
                    size: "sm",
                    onClick: () => (0, import_notifications2.hideNotification)("different-inventory"),
                    children: "View cart"
                  }, void 0, !1, {
                    fileName: "app/context/InventoryCartContext.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/context/InventoryCartContext.tsx",
                lineNumber: 72,
                columnNumber: 8
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/context/InventoryCartContext.tsx",
            lineNumber: 70,
            columnNumber: 7
          }, this),
          color: "blue",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid2.InformationCircleIcon, {
            className: "h-9 w-9"
          }, void 0, !1, {
            fileName: "app/context/InventoryCartContext.tsx",
            lineNumber: 97,
            columnNumber: 12
          }, this),
          autoClose: !1
        });
        return;
      }
      if (!isAlreadyInCart) {
        setItems((prev) => [...prev, item]), (0, import_notifications2.showNotification)({
          title: "Successfully added",
          message: `Added ${item.name} to cart`,
          color: "green",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid2.CheckCircleIcon, {
            className: "h-9 w-9"
          }, void 0, !1, {
            fileName: "app/context/InventoryCartContext.tsx",
            lineNumber: 109,
            columnNumber: 12
          }, this)
        });
        return;
      }
      setItems((prevItems) => {
        let newItems = [...prevItems], index = newItems.findIndex((i) => i.id === item.id);
        return index > -1 && (newItems[index].quantity = newItems[index].quantity + item.quantity), newItems;
      }), (0, import_notifications2.showNotification)({
        title: "Item already present in cart",
        message: `Quantity increased by ${item.quantity}`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid2.CheckCircleIcon, {
          className: "h-7 w-7"
        }, void 0, !1, {
          fileName: "app/context/InventoryCartContext.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        color: "green"
      });
    },
    [clearCart, items, setItems]
  ), removeItemFromCart = (itemId) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId)), (0, import_notifications2.showNotification)({
      title: "Successfully removed",
      message: "Item removed from cart",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid2.MinusCircleIcon, {
        className: "h-7 w-7"
      }, void 0, !1, {
        fileName: "app/context/InventoryCartContext.tsx",
        lineNumber: 140,
        columnNumber: 10
      }, this),
      color: "red"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SupplierCartContext2.Provider, {
    value: {
      itemsInCart: items,
      totalPrice,
      addItemToCart,
      removeItemFromCart,
      clearCart
    },
    children
  }, void 0, !1, {
    fileName: "app/context/InventoryCartContext.tsx",
    lineNumber: 146,
    columnNumber: 3
  }, this);
}
function useInventoryCart() {
  let context = React3.useContext(SupplierCartContext2);
  if (!context)
    throw new Error("`useCart()` must be used within a <CartProvider />");
  return context;
}

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), appendCache = (0, import_core3.createEmotionCache)({ key: "mantine", prepend: !1 }), links = () => [{ rel: "stylesheet", href: app_default }], loader = async ({ request }) => {
  let user = await getUser(request);
  return (0, import_node2.json)({ user });
}, meta = () => ({
  charset: "utf-8",
  title: appConfig_default.name,
  viewport: "width=device-width,initial-scale=1"
});
function Document({
  title,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.MantineProvider, {
    withNormalizeCSS: !0,
    emotionCache: appendCache,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      className: "h-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
              children: title
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 58,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 59,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 60,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 56,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          className: "h-full",
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 64,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 65,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 66,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 55,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 54,
    columnNumber: 3
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_modals.ModalsProvider, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_notifications3.NotificationsProvider, {
        autoClose: 4e3,
        limit: 6,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InventoryCartProvider, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SupplierCartProvider, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 80,
              columnNumber: 8
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 79,
            columnNumber: 7
          }, this)
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 76,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 3
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react6.useCatch)();
  switch (caught.status) {
    case 404:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
        title: "Oh no...",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FourOhFour, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 96,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 5
      }, this);
    default:
      throw new Error(`Unhandled error: ${caught.status}`);
  }
}

// app/routes/api/reset-password.ts
var reset_password_exports = {};
__export(reset_password_exports, {
  action: () => action
});
var import_node3 = require("@remix-run/node");
var action = async ({ request }) => {
  var _a, _b;
  let formData = await request.formData(), userId = (_a = formData.get("userId")) == null ? void 0 : _a.toString(), password2 = (_b = formData.get("password")) == null ? void 0 : _b.toString();
  return !userId || !password2 ? (0, import_node3.json)(
    { success: !1, error: "Missing userId or password" },
    { status: 400 }
  ) : (await prisma.user.update({
    where: { id: userId },
    data: {
      passwordHash: await createPasswordHash(password2),
      hasResetPassword: !0
    }
  }), (0, import_node3.json)({ success: !0 }));
};

// app/routes/api/auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
var action2 = async ({ request }) => logout(request), loader2 = async () => (0, import_node4.redirect)("/");

// app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => await getUser(request) ? (0, import_node5.redirect)("/") : null;
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "grid min-h-full place-items-center bg-gray-200",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col justify-center rounded-lg border bg-white py-12 px-4 sm:px-6 lg:px-12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mx-auto w-full max-w-sm lg:w-96",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
            fileName: "app/routes/__auth.tsx",
            lineNumber: 19,
            columnNumber: 7
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__auth.tsx",
          lineNumber: 18,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth.tsx",
        lineNumber: 17,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 16,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/routes/__auth/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action3,
  default: () => Register
});
var import_core4 = require("@mantine/core"), import_client5 = require("@prisma/client"), import_react8 = require("@remix-run/react");

// app/utils/misc.server.ts
var import_node6 = require("@remix-run/node");
var DEFAULT_REDIRECT = "/", badRequest = (data) => (0, import_node6.json)(data, { status: 400 }), unauthorized = (data) => (0, import_node6.json)(data, { status: 401 });
function validateEmail(email2) {
  return typeof email2 == "string" && email2.length > 3 && email2.includes("@");
}
function validateName(name2) {
  return typeof name2 == "string" && name2.length > 1;
}
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}

// app/routes/__auth/register.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  let formData = await request.formData(), email2 = formData.get("email"), password2 = formData.get("password"), confirmPassword = formData.get("confirmPassword"), firstName = formData.get("firstName"), lastName = formData.get("lastName");
  if (!validateName(firstName))
    return badRequest({
      fieldErrors: {
        firstName: "First name is required"
      }
    });
  if (!validateName(lastName))
    return badRequest({
      fieldErrors: {
        lastName: "Last name is required"
      }
    });
  if (!validateEmail(email2))
    return badRequest({
      fieldErrors: { email: "Email is invalid" }
    });
  if (typeof password2 != "string" || typeof confirmPassword != "string")
    return badRequest({
      fieldErrors: { password: "Password is required" }
    });
  if (password2.length < 8 || confirmPassword.length < 8)
    return badRequest({
      fieldErrors: { password: "Password is too short" }
    });
  if (password2 !== confirmPassword)
    return badRequest({
      fieldErrors: { password: "Passwords do not match" }
    });
  if (await getUserByEmail(email2))
    return badRequest({
      fieldErrors: { email: "A user already exists with this email" }
    });
  let user = await createUser({ email: email2, password: password2, firstName, lastName });
  return createUserSession({
    request,
    userId: user.id,
    role: import_client5.Role.CUSTOMER,
    redirectTo: "/"
  });
};
function Register() {
  var _a, _b, _c, _d, _e;
  let transition = (0, import_react8.useTransition)(), actionData = (0, import_react8.useActionData)(), isSubmitting = transition.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "mt-6 text-3xl font-extrabold text-gray-900",
            children: "Register"
          }, void 0, !1, {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 90,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "mt-2 text-sm text-gray-600",
            children: [
              "Have an account already?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Anchor, {
                component: import_react8.Link,
                to: "/login",
                size: "sm",
                prefetch: "intent",
                children: "Sign in"
              }, void 0, !1, {
                fileName: "app/routes/__auth/register.tsx",
                lineNumber: 93,
                columnNumber: 6
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 91,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 89,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Form, {
        replace: !0,
        method: "post",
        className: "mt-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
          disabled: isSubmitting,
          className: "flex flex-col gap-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.TextInput, {
              name: "firstName",
              autoComplete: "given-name",
              label: "Given name",
              error: (_a = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _a.firstName,
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 101,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.TextInput, {
              name: "lastName",
              label: "Family name",
              error: (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.lastName,
              autoComplete: "family-name",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 109,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.TextInput, {
              name: "email",
              type: "email",
              autoComplete: "email",
              label: "Email address",
              error: (_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email,
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 117,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.PasswordInput, {
              name: "password",
              label: "Password",
              error: (_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.password,
              autoComplete: "current-password",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 126,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.PasswordInput, {
              name: "confirmPassword",
              label: "Confirm password",
              error: (_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.password,
              autoComplete: "current-password",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 134,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Textarea, {
              name: "address",
              label: "Address",
              autoComplete: "street-address"
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 142,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Button, {
              type: "submit",
              loading: isSubmitting,
              fullWidth: !0,
              loaderPosition: "right",
              mt: "1rem",
              children: "Register"
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 148,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 100,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 99,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 88,
    columnNumber: 3
  }, this);
}

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => Login
});
var import_core5 = require("@mantine/core"), import_client6 = require("@prisma/client"), import_react9 = require("@remix-run/react");

// app/lib/zod.schema.ts
var import_zod = require("zod"), name = import_zod.z.string().min(1, "Name is required"), email = import_zod.z.string().email("Invalid email"), password = import_zod.z.string().min(8, "Password must be at least 8 characters"), LoginSchema = import_zod.z.object({
  email,
  password,
  remember: import_zod.z.enum(["on"]).optional(),
  redirectTo: import_zod.z.string().default("/")
});

// app/utils/validation.ts
async function validateAction(request, schema) {
  let formData = await request.formData(), fields = Object.fromEntries(formData), result = schema.safeParse(fields);
  if (!result.success) {
    let fieldErrors = result.error.issues.reduce(
      (acc, issue) => {
        let key = issue.path[0] ?? issue.code;
        return acc[key] = issue.message, acc;
      },
      {}
    );
    return {
      fields: null,
      fieldErrors
    };
  }
  return {
    fields: result.data,
    fieldErrors: null
  };
}

// app/routes/__auth/login.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action4 = async ({ request }) => {
  let { fieldErrors, fields } = await validateAction(request, LoginSchema);
  if (fieldErrors)
    return badRequest({ fieldErrors });
  let { email: email2, password: password2, redirectTo, remember } = fields, user = await verifyLogin(email2, password2);
  return user ? createUserSession({
    request,
    userId: user.id,
    role: user.role,
    remember: remember === "on",
    redirectTo: safeRedirect(redirectTo)
  }) : badRequest({
    fieldErrors: {
      password: "Invalid username or password"
    }
  });
};
function Login() {
  var _a, _b;
  let [searchParams] = (0, import_react9.useSearchParams)(), fetcher = (0, import_react9.useFetcher)(), actionData = fetcher.data, redirectTo = searchParams.get("redirectTo") || "/", isSubmitting = fetcher.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "mt-6 text-3xl font-extrabold text-gray-900",
          children: "Sign in"
        }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 63,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 62,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
        method: "post",
        replace: !0,
        className: "mt-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "hidden",
            name: "redirectTo",
            value: redirectTo
          }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 67,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.SegmentedControl, {
            fullWidth: !0,
            name: "role",
            mb: "2rem",
            data: Object.values(import_client6.Role).map((value) => ({
              label: roleLookup(value),
              value
            }))
          }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 69,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            disabled: isSubmitting,
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.TextInput, {
                name: "email",
                type: "email",
                autoComplete: "email",
                label: "Email address",
                error: (_a = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _a.email,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 80,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.PasswordInput, {
                name: "password",
                label: "Password",
                error: (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.password,
                autoComplete: "current-password",
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 89,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Group, {
                position: "apart",
                mt: "1rem",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Switch, {
                  id: "remember-me",
                  name: "rememberMe",
                  label: "Remember me"
                }, void 0, !1, {
                  fileName: "app/routes/__auth/login.tsx",
                  lineNumber: 98,
                  columnNumber: 7
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 97,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Button, {
                type: "submit",
                loading: isSubmitting,
                fullWidth: !0,
                loaderPosition: "right",
                mt: "1rem",
                children: "Sign in"
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 110,
                columnNumber: 6
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 79,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 66,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 61,
    columnNumber: 3
  }, this);
}

// app/routes/__app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => AppLayout,
  loader: () => loader4
});
var import_solid3 = require("@heroicons/react/24/solid"), import_outline = require("@heroicons/react/24/outline"), import_core7 = require("@mantine/core"), import_node7 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/components/TailwindContainer.tsx
var import_core6 = require("@mantine/core"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function TailwindContainer({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_core6.clsx)("mx-auto max-w-2xl lg:max-w-7xl", className),
    children
  }, void 0, !1, {
    fileName: "app/components/TailwindContainer.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// app/lib/supplier.server.ts
function getAllSuppliers() {
  return prisma.supplier.findMany({
    orderBy: {
      name: "asc"
    },
    include: {
      items: !0
    }
  });
}
function getAllInventories() {
  return prisma.inventory.findMany({
    orderBy: {
      name: "asc"
    },
    include: {
      items: !0
    }
  });
}

// app/routes/__app.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  if (await requireUserId(request), await isStaff(request))
    return (0, import_node7.redirect)("/staff");
  if (await isStoreManager(request))
    return (0, import_node7.redirect)("/store");
  if (await isAdmin(request))
    return (0, import_node7.redirect)("/admin");
  let suppliers = await getAllSuppliers(), items = suppliers.reduce((acc, supplier) => (supplier.items.forEach((item) => acc.push(item)), acc), []);
  return (0, import_node7.json)({ inventories: suppliers, items });
};
function AppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex h-full flex-col",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderComponent, {}, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 51,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.ScrollArea, {
          classNames: { root: "flex-1 bg-gray-50" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
              fileName: "app/routes/__app.tsx",
              lineNumber: 54,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app.tsx",
            lineNumber: 53,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 52,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterComponent, {}, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 58,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app.tsx",
      lineNumber: 50,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 49,
    columnNumber: 3
  }, this);
}
function HeaderComponent() {
  var _a;
  let { user } = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Form, {
        replace: !0,
        action: "/api/auth/logout",
        method: "post",
        id: "logout-form"
      }, void 0, !1, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 69,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "flex h-16 items-center border-b border-b-gray-300 py-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          className: "w-full px-10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-full w-full items-center justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-shrink-0 items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Anchor, {
                  component: import_react10.Link,
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex h-10 items-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "flex items-center text-2xl font-bold text-black",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "IMS."
                        }, void 0, !1, {
                          fileName: "app/routes/__app.tsx",
                          lineNumber: 77,
                          columnNumber: 11
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "ml-1.5 text-sm font-medium",
                          children: "(INVENTORY)"
                        }, void 0, !1, {
                          fileName: "app/routes/__app.tsx",
                          lineNumber: 78,
                          columnNumber: 11
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app.tsx",
                      lineNumber: 76,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 74,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 73,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Button, {
                    component: import_react10.Link,
                    to: "/cart",
                    title: "Cart",
                    variant: "subtle",
                    compact: !0,
                    children: "View Quote"
                  }, void 0, !1, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 87,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Menu, {
                    position: "bottom-start",
                    withArrow: !0,
                    transition: "pop-top-right",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Menu.Target, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Avatar, {
                            color: "blue",
                            size: "md",
                            children: [
                              user.firstName.charAt(0),
                              user.lastName.charAt(0)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/__app.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__app.tsx",
                          lineNumber: 103,
                          columnNumber: 10
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Menu.Dropdown, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Menu.Item, {
                            disabled: !0,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              className: "mt-0.5 text-sm",
                              children: (_a = user.inventory) == null ? void 0 : _a.name
                            }, void 0, !1, {
                              fileName: "app/routes/__app.tsx",
                              lineNumber: 113,
                              columnNumber: 11
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/__app.tsx",
                            lineNumber: 112,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Divider, {}, void 0, !1, {
                            fileName: "app/routes/__app.tsx",
                            lineNumber: 116,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Menu.Item, {
                            disabled: !0,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "flex flex-col",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  children: [
                                    user.firstName,
                                    " ",
                                    user.lastName,
                                    " "
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/__app.tsx",
                                  lineNumber: 120,
                                  columnNumber: 12
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  className: "mt-0.5 text-sm",
                                  children: user.email
                                }, void 0, !1, {
                                  fileName: "app/routes/__app.tsx",
                                  lineNumber: 123,
                                  columnNumber: 12
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/__app.tsx",
                              lineNumber: 119,
                              columnNumber: 11
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/__app.tsx",
                            lineNumber: 118,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Divider, {}, void 0, !1, {
                            fileName: "app/routes/__app.tsx",
                            lineNumber: 127,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.ShoppingBagIcon, {
                              className: "w- h-4 text-gray-700"
                            }, void 0, !1, {
                              fileName: "app/routes/__app.tsx",
                              lineNumber: 130,
                              columnNumber: 17
                            }, this),
                            component: import_react10.Link,
                            to: "/order-history",
                            children: "Your orders"
                          }, void 0, !1, {
                            fileName: "app/routes/__app.tsx",
                            lineNumber: 129,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid3.ArrowLeftOnRectangleIcon, {
                              className: "h-4 w-4 text-gray-700"
                            }, void 0, !1, {
                              fileName: "app/routes/__app.tsx",
                              lineNumber: 138,
                              columnNumber: 12
                            }, this),
                            type: "submit",
                            form: "logout-form",
                            children: "Logout"
                          }, void 0, !1, {
                            fileName: "app/routes/__app.tsx",
                            lineNumber: 136,
                            columnNumber: 10
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__app.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 97,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 86,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app.tsx",
            lineNumber: 72,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 71,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 70,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 68,
    columnNumber: 3
  }, this);
}
function FooterComponent() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Footer, {
    height: 1,
    className: "flex items-center justify-center text-center",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, !1, {
      fileName: "app/routes/__app.tsx",
      lineNumber: 158,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 157,
    columnNumber: 3
  }, this);
}

// app/routes/__app/suppliers.$slug.tsx
var suppliers_slug_exports = {};
__export(suppliers_slug_exports, {
  default: () => Supplier,
  loader: () => loader5
});
var import_solid4 = require("@heroicons/react/24/solid"), import_core8 = require("@mantine/core"), import_node8 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), React4 = __toESM(require("react"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader5 = async ({ params }) => {
  let { slug } = params;
  if (!slug)
    throw new Response("No slug provided", { status: 404 });
  return (0, import_node8.json)({ slug });
};
function Supplier() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemsGrid, {}, void 0, !1, {
        fileName: "app/routes/__app/suppliers.$slug.tsx",
        lineNumber: 25,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/suppliers.$slug.tsx",
      lineNumber: 24,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/suppliers.$slug.tsx",
    lineNumber: 23,
    columnNumber: 3
  }, this);
}
function ItemsGrid() {
  let { slug } = (0, import_react11.useLoaderData)(), supplier = useSupplier(slug);
  return supplier ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-white",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "py-16 sm:py-20",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "mb-6 py-6 text-center text-2xl font-extrabold tracking-tight text-gray-900",
            children: supplier.name
          }, void 0, !1, {
            fileName: "app/routes/__app/suppliers.$slug.tsx",
            lineNumber: 44,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "px-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "sm:flex sm:items-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "sm:flex-auto",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-xl font-semibold text-gray-900",
                      children: "Items"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/suppliers.$slug.tsx",
                      lineNumber: 51,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "mt-2 text-sm text-gray-700",
                      children: "List of all the items"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/suppliers.$slug.tsx",
                      lineNumber: 52,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/suppliers.$slug.tsx",
                  lineNumber: 50,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/suppliers.$slug.tsx",
                lineNumber: 49,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-8 flex flex-col",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
                      children: supplier.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                        className: "min-w-full divide-y divide-gray-300",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                            className: "bg-gray-50",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                  scope: "col",
                                  className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                                  children: "Name"
                                }, void 0, !1, {
                                  fileName: "app/routes/__app/suppliers.$slug.tsx",
                                  lineNumber: 65,
                                  columnNumber: 15
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                  scope: "col",
                                  className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                  children: "Price/unit"
                                }, void 0, !1, {
                                  fileName: "app/routes/__app/suppliers.$slug.tsx",
                                  lineNumber: 71,
                                  columnNumber: 15
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                  scope: "col",
                                  className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                  children: "Quantity Available"
                                }, void 0, !1, {
                                  fileName: "app/routes/__app/suppliers.$slug.tsx",
                                  lineNumber: 77,
                                  columnNumber: 15
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                  scope: "col",
                                  className: "relative py-3.5 pl-3 pr-4 sm:pr-6"
                                }, void 0, !1, {
                                  fileName: "app/routes/__app/suppliers.$slug.tsx",
                                  lineNumber: 83,
                                  columnNumber: 15
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/__app/suppliers.$slug.tsx",
                              lineNumber: 64,
                              columnNumber: 14
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/__app/suppliers.$slug.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                            className: "divide-y divide-gray-200 bg-white",
                            children: supplier.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemRow, {
                              item
                            }, item.id, !1, {
                              fileName: "app/routes/__app/suppliers.$slug.tsx",
                              lineNumber: 91,
                              columnNumber: 22
                            }, this))
                          }, void 0, !1, {
                            fileName: "app/routes/__app/suppliers.$slug.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__app/suppliers.$slug.tsx",
                        lineNumber: 62,
                        columnNumber: 12
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid4.ShoppingCartIcon, {
                            className: "mx-auto h-9 w-9 text-gray-500"
                          }, void 0, !1, {
                            fileName: "app/routes/__app/suppliers.$slug.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "mt-4 block text-sm font-medium text-gray-500",
                            children: [
                              "No items in store yet. ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                                fileName: "app/routes/__app/suppliers.$slug.tsx",
                                lineNumber: 99,
                                columnNumber: 37
                              }, this),
                              "Come back later."
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/__app/suppliers.$slug.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__app/suppliers.$slug.tsx",
                        lineNumber: 96,
                        columnNumber: 12
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/suppliers.$slug.tsx",
                      lineNumber: 60,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/suppliers.$slug.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/suppliers.$slug.tsx",
                  lineNumber: 58,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/suppliers.$slug.tsx",
                lineNumber: 57,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/suppliers.$slug.tsx",
            lineNumber: 48,
            columnNumber: 6
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/suppliers.$slug.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/suppliers.$slug.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/suppliers.$slug.tsx",
    lineNumber: 41,
    columnNumber: 3
  }, this) : null;
}
function ItemRow({ item }) {
  let { addItemToCart } = useSupplierCart(), [quantity, setQuantity] = React4.useState(1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
        className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex items-center gap-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: item.image,
              alt: "",
              className: "h-6 w-6 rounded-full object-cover"
            }, void 0, !1, {
              fileName: "app/routes/__app/suppliers.$slug.tsx",
              lineNumber: 124,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "font-medium text-gray-900",
              children: item.name
            }, void 0, !1, {
              fileName: "app/routes/__app/suppliers.$slug.tsx",
              lineNumber: 130,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/suppliers.$slug.tsx",
          lineNumber: 123,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/suppliers.$slug.tsx",
        lineNumber: 122,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
        className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-gray-900",
          children: [
            "$",
            item.price
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/suppliers.$slug.tsx",
          lineNumber: 135,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/suppliers.$slug.tsx",
        lineNumber: 134,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
        className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
        children: item.quantity
      }, void 0, !1, {
        fileName: "app/routes/__app/suppliers.$slug.tsx",
        lineNumber: 137,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
        className: "relative flex items-center justify-center whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.NumberInput, {
              min: 1,
              size: "sm",
              max: item.quantity,
              value: quantity,
              onChange: (value) => setQuantity(value),
              onBlur: () => {
                quantity > item.quantity && setQuantity(item.quantity), quantity || setQuantity(1);
              }
            }, void 0, !1, {
              fileName: "app/routes/__app/suppliers.$slug.tsx",
              lineNumber: 142,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.Button, {
              compact: !0,
              variant: "subtle",
              onClick: () => addItemToCart({
                ...item,
                quantity
              }),
              children: "Add to Quotation"
            }, void 0, !1, {
              fileName: "app/routes/__app/suppliers.$slug.tsx",
              lineNumber: 159,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/suppliers.$slug.tsx",
          lineNumber: 141,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/suppliers.$slug.tsx",
        lineNumber: 140,
        columnNumber: 4
      }, this)
    ]
  }, item.id, !0, {
    fileName: "app/routes/__app/suppliers.$slug.tsx",
    lineNumber: 121,
    columnNumber: 3
  }, this);
}

// app/routes/__app/order-history.tsx
var order_history_exports = {};
__export(order_history_exports, {
  action: () => action5,
  default: () => OrderHistory,
  loader: () => loader6
});
var import_outline2 = require("@heroicons/react/24/outline"), import_solid5 = require("@heroicons/react/24/solid"), import_core9 = require("@mantine/core"), import_notifications4 = require("@mantine/notifications"), import_client8 = require("@prisma/client"), import_node9 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), React5 = __toESM(require("react")), import_react_input_mask = __toESM(require("react-input-mask"));

// app/lib/order.server.ts
var import_client7 = require("@prisma/client");
async function createQuote({
  userId,
  items,
  amount,
  originalAmount,
  quotedAmount,
  inventoryId
}) {
  return await prisma.$transaction(async (tx) => {
    let alreadyExistingInventoryItems = await tx.inventoryItem.findMany({
      where: {
        id: {
          in: items.map((item) => item.id)
        },
        inventoryId
      }
    }), itemsToCreate = items.filter((item) => !alreadyExistingInventoryItems.find(
      (inventoryItem2) => inventoryItem2.id === item.id
    ));
    itemsToCreate.length > 0 && await tx.inventoryItem.createMany({
      data: itemsToCreate.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        inventoryId,
        image: item.image,
        name: item.name,
        price: item.price,
        slug: item.slug
      }))
    });
    let itemsToUpdate = alreadyExistingInventoryItems.map((inventoryItem) => {
      let item = items.find((item2) => item2.id === inventoryItem.id);
      return {
        ...inventoryItem,
        quantity: inventoryItem.quantity + item.quantity
      };
    });
    return await Promise.all(
      itemsToUpdate.map(
        (item) => tx.inventoryItem.update({
          where: { id: item.id },
          data: { quantity: item.quantity }
        })
      )
    ), tx.order.create({
      data: {
        userId,
        status: import_client7.OrderStatus.PENDING,
        originalAmount,
        quotedAmount,
        items: {
          createMany: {
            data: items.map((item) => ({
              itemId: item.id,
              quantity: item.quantity
            }))
          }
        },
        invoice: {
          create: {
            amount,
            totalAmount: amount
          }
        }
      }
    });
  });
}
async function cancelOrder(orderId) {
  if (!await prisma.order.findUnique({
    where: {
      id: orderId
    },
    include: {
      items: {
        include: {
          item: !0
        }
      }
    }
  }))
    throw new Error("Order not found");
  return prisma.order.update({
    where: {
      id: orderId
    },
    data: {
      status: import_client7.OrderStatus.CANCELLED
    }
  });
}

// app/routes/__app/order-history.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), dateFormatter = new Intl.DateTimeFormat("en-US"), loader6 = async ({ request }) => {
  let userId = await requireUserId(request), orders = await prisma.order.findMany({
    where: {
      userId
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      invoice: !0,
      items: {
        include: {
          item: !0
        }
      }
    }
  });
  return (0, import_node9.json)({ orders });
}, action5 = async ({ request }) => {
  var _a, _b, _c;
  let userId = await requireUserId(request), formData = await request.formData(), intent = (_a = formData.get("intent")) == null ? void 0 : _a.toString();
  if (!userId || !intent)
    return unauthorized({ success: !1, message: "Unauthorized" });
  switch (intent) {
    case "make-payment":
      {
        let orderId = (_b = formData.get("orderId")) == null ? void 0 : _b.toString();
        if (!orderId)
          return badRequest({ success: !1, message: "Invalid order id" });
        await prisma.order.update({
          where: {
            id: orderId
          },
          data: {
            paymentPending: !0
          }
        });
      }
      return (0, import_node9.json)({ success: !0 });
    case "cancel-order": {
      let orderId = (_c = formData.get("orderId")) == null ? void 0 : _c.toString();
      return orderId ? cancelOrder(orderId).then(() => (0, import_node9.json)({ success: !0 })).catch((e) => (0, import_node9.json)({ success: !1, message: e.message }, { status: 500 })) : badRequest({ success: !1, message: "Invalid order id" });
    }
    default:
      return badRequest({ success: !1, message: "Invalid intent" });
  }
};
function OrderHistory() {
  let { orders } = (0, import_react12.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react12.useSearchParams)(), { clearCart } = useSupplierCart();
  return React5.useEffect(() => {
    if (searchParams.get("success")) {
      clearCart(), setSearchParams({}, { replace: !0 });
      return;
    }
  }, [clearCart, searchParams, setSearchParams]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-white",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-white",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "py-16 sm:py-24",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mx-auto max-w-7xl sm:px-2 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                        className: "text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl",
                        children: "Order history"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "mt-2 text-sm text-gray-500",
                        children: "Check the status of recent orders, manage returns, and discover similar products."
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 110,
                    columnNumber: 10
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 109,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-16",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                      className: "sr-only",
                      children: "Recent orders"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/order-history.tsx",
                      lineNumber: 122,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mx-auto max-w-7xl sm:px-2 lg:px-8",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0",
                        children: orders.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                          children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Order, {
                            order
                          }, order.id, !1, {
                            fileName: "app/routes/__app/order-history.tsx",
                            lineNumber: 128,
                            columnNumber: 15
                          }, this))
                        }, void 0, !1, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 126,
                          columnNumber: 13
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {}, void 0, !1, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 132,
                          columnNumber: 13
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/order-history.tsx",
                      lineNumber: 123,
                      columnNumber: 10
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 121,
                  columnNumber: 9
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 108,
              columnNumber: 8
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 107,
            columnNumber: 7
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/order-history.tsx",
          lineNumber: 106,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 105,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/order-history.tsx",
      lineNumber: 104,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/order-history.tsx",
    lineNumber: 103,
    columnNumber: 3
  }, this);
}
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline2.ShoppingBagIcon, {
        className: "mx-auto h-9 w-9 text-gray-500"
      }, void 0, !1, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 149,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "mt-4 block text-sm font-medium text-gray-500",
        children: "No previous orders"
      }, void 0, !1, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 150,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/order-history.tsx",
    lineNumber: 148,
    columnNumber: 3
  }, this);
}
function Order({
  order
}) {
  let cancelOrder2 = (0, import_react12.useFetcher)(), fetcher = (0, import_react12.useFetcher)(), isCancellingOrder = cancelOrder2.state !== "idle", isOrderPending = order.status === import_client8.OrderStatus.PENDING, isOrderCancelled = order.status === import_client8.OrderStatus.CANCELLED, isOrderRejected = order.status === import_client8.OrderStatus.REJECTED, isPaymentPending = order.paymentPending === !1, [paymentMethod, setPaymentMethod] = React5.useState(
    import_client8.PaymentMethod.CREDIT_CARD
  ), [isPaymentModalOpen, setIsPaymentModalOpen] = React5.useState(!1), closePaymentModal = () => setIsPaymentModalOpen(!1), showPaymentModal = () => setIsPaymentModalOpen(!0), placeOrder = () => {
    fetcher.submit(
      {
        intent: "make-payment",
        orderId: order.id
      },
      {
        method: "post",
        replace: !0
      }
    );
  }, isSubmitting = fetcher.state !== "idle";
  return React5.useEffect(() => {
    if (fetcher.type === "done")
      if ((0, import_notifications4.cleanNotifications)(), fetcher.data.success)
        closePaymentModal();
      else {
        (0, import_notifications4.showNotification)({
          title: "Error",
          message: fetcher.data.message,
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid5.MinusCircleIcon, {
            className: "h-7 w-7"
          }, void 0, !1, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 212,
            columnNumber: 11
          }, this),
          color: "red"
        });
        return;
      }
  }, [fetcher.data, fetcher.type]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            className: "sr-only",
            children: [
              "Order placed on",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", {
                dateTime: order.createdAt,
                children: dateFormatter.format(new Date(order.createdAt))
              }, void 0, !1, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 226,
                columnNumber: 6
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 224,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center justify-between py-6 px-4 sm:gap-6 sm:px-6 lg:gap-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
                className: "flex items-center gap-8",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Order number"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 234,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 text-gray-500",
                        children: order.id.slice(-6).toUpperCase()
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 235,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 233,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "hidden sm:block",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Date placed"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 241,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 text-gray-500",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", {
                          dateTime: order.createdAt,
                          children: dateFormatter.format(new Date(order.createdAt))
                        }, void 0, !1, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 243,
                          columnNumber: 9
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 242,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 240,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Original amount"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 250,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 font-medium text-gray-900",
                        children: [
                          "$",
                          order.originalAmount.toFixed(2)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 251,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 249,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Quoted amount"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 257,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 font-medium text-gray-900",
                        children: [
                          "$",
                          order.quotedAmount.toFixed(2)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 258,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 256,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between pt-6 text-gray-900 sm:block sm:pt-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Status"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 264,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 font-medium text-gray-900",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Badge, {
                          color: isOrderPending ? "blue" : isOrderCancelled || isOrderRejected ? "red" : "green",
                          children: isPaymentPending ? "Payment Pending" : titleCase(order.status)
                        }, void 0, !1, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 266,
                          columnNumber: 9
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 265,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 263,
                    columnNumber: 7
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 232,
                columnNumber: 6
              }, this),
              isOrderPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Button, {
                color: "red",
                variant: "outline",
                loaderPosition: "right",
                loading: isCancellingOrder,
                onClick: () => cancelOrder2.submit(
                  {
                    intent: "cancel-order",
                    orderId: order.id
                  },
                  { method: "post", replace: !0 }
                ),
                children: "Cancel Quote"
              }, void 0, !1, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 284,
                columnNumber: 7
              }, this) : null,
              isPaymentPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Button, {
                color: "red",
                variant: "outline",
                loaderPosition: "right",
                loading: isSubmitting,
                onClick: () => showPaymentModal(),
                children: "Make Payment"
              }, void 0, !1, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 304,
                columnNumber: 7
              }, this) : null
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 231,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "divide-y divide-gray-200",
            children: order.items.map(({ item, quantity }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: "p-4 sm:p-6",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center sm:items-start",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: item.image,
                    alt: item.name,
                    className: "aspect-square h-8 w-8 rounded-full object-cover object-center"
                  }, void 0, !1, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "ml-6 flex-1 text-sm",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "font-medium text-gray-900 sm:flex sm:justify-between",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                          children: [
                            item.name,
                            " ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                              children: [
                                "(x",
                                quantity,
                                ")"
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/__app/order-history.tsx",
                              lineNumber: 329,
                              columnNumber: 24
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 328,
                          columnNumber: 11
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "mt-2 sm:mt-0",
                          children: [
                            "$",
                            (item.price * quantity).toFixed(2)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 331,
                          columnNumber: 11
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app/order-history.tsx",
                      lineNumber: 327,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 326,
                    columnNumber: 9
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 320,
                columnNumber: 8
              }, this)
            }, item.id, !1, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 319,
              columnNumber: 7
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 317,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 223,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Modal, {
        opened: isPaymentModalOpen,
        onClose: closePaymentModal,
        title: "Payment",
        centered: !0,
        overlayBlur: 1,
        overlayOpacity: 0.5,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          className: "flex flex-col gap-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col gap-2",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-sm text-gray-600",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-semibold",
                    children: "Amount: "
                  }, void 0, !1, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 353,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: [
                      "$",
                      order.quotedAmount.toFixed(2)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 354,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 352,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 351,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Select, {
              label: "Payment method",
              value: paymentMethod,
              clearable: !1,
              onChange: (e) => setPaymentMethod(e),
              data: Object.values(import_client8.PaymentMethod).map((method) => ({
                label: titleCase(method.replace(/_/g, " ")),
                value: method
              }))
            }, void 0, !1, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 358,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Input.Wrapper, {
              label: "Card Number",
              required: !0,
              labelProps: { className: "!text-[13px] !font-semibold" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Input, {
                name: "cardNumber",
                component: import_react_input_mask.default,
                mask: "9999 9999 9999 9999",
                placeholder: "XXXX XXXX XXXX XXXX",
                alwaysShowMask: !1,
                defaultValue: "54326787678756467"
              }, void 0, !1, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 374,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 369,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Input.Wrapper, {
                  id: "hsjsjjscvv",
                  label: "CVV",
                  labelProps: { className: "!text-[13px] !font-semibold" },
                  required: !0,
                  className: "w-full",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Input, {
                    name: "cvv",
                    id: "hsjsjjscvv",
                    component: import_react_input_mask.default,
                    mask: "999",
                    placeholder: "XXX",
                    alwaysShowMask: !1,
                    defaultValue: "123"
                  }, void 0, !1, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 392,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 385,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Input.Wrapper, {
                  id: "hsjsjjsexpiry",
                  label: "Expiry",
                  labelProps: { className: "!text-[13px] !font-semibold" },
                  required: !0,
                  className: "w-full",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Input, {
                    name: "Expiry",
                    id: "hsjsjjsexpiry",
                    component: import_react_input_mask.default,
                    mask: "99/9999",
                    placeholder: "XX/XXXX",
                    alwaysShowMask: !1,
                    defaultValue: "122026"
                  }, void 0, !1, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 410,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 403,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 384,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 flex items-center gap-4 sm:justify-end",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Button, {
                  variant: "subtle",
                  color: "red",
                  onClick: () => closePaymentModal(),
                  children: "Cancel"
                }, void 0, !1, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 423,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Button, {
                  variant: "filled",
                  onClick: () => placeOrder(),
                  loading: isSubmitting,
                  loaderPosition: "right",
                  children: "Place order"
                }, void 0, !1, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 431,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 422,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/order-history.tsx",
          lineNumber: 350,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 342,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/order-history.tsx",
    lineNumber: 222,
    columnNumber: 3
  }, this);
}

// app/routes/__app/items.$slug.tsx
var items_slug_exports = {};
__export(items_slug_exports, {
  default: () => Item,
  loader: () => loader7
});
var import_core10 = require("@mantine/core"), import_node10 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var React6 = __toESM(require("react")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader7 = async ({ params }) => {
  let { slug } = params;
  if (!slug)
    throw new Response("No slug provided", { status: 404 });
  return (0, import_node10.json)({ slug });
};
function Item() {
  let { slug } = (0, import_react13.useLoaderData)();
  return useItem(slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemOverview, {}, void 0, !1, {
        fileName: "app/routes/__app/items.$slug.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/items.$slug.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/items.$slug.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this) : null;
}
function ItemOverview() {
  let { slug } = (0, import_react13.useLoaderData)(), item = useItem(slug), { addItemToCart } = useSupplierCart(), [quantity, setQuantity] = React6.useState(1);
  return item ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-white",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 lg:px-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "sm:mt-10 lg:row-span-2 lg:mt-0 lg:self-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: item.image,
            alt: item.name,
            className: "aspect-square h-10 w-10 rounded-full object-cover"
          }, void 0, !1, {
            fileName: "app/routes/__app/items.$slug.tsx",
            lineNumber: 55,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/items.$slug.tsx",
          lineNumber: 54,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "lg:col-start-2 lg:max-w-lg lg:self-end",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-4",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
                children: item.name
              }, void 0, !1, {
                fileName: "app/routes/__app/items.$slug.tsx",
                lineNumber: 64,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/items.$slug.tsx",
              lineNumber: 63,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
              "aria-labelledby": "information-heading",
              className: "mt-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                  id: "information-heading",
                  className: "sr-only",
                  children: "Cuisine information"
                }, void 0, !1, {
                  fileName: "app/routes/__app/items.$slug.tsx",
                  lineNumber: 70,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "text-lg text-gray-900 sm:text-xl",
                  children: [
                    "$",
                    item.price
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/items.$slug.tsx",
                  lineNumber: 74,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-4 space-y-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "text-base text-gray-500",
                    children: item.description
                  }, void 0, !1, {
                    fileName: "app/routes/__app/items.$slug.tsx",
                    lineNumber: 77,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/items.$slug.tsx",
                  lineNumber: 76,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/items.$slug.tsx",
              lineNumber: 69,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core10.NumberInput, {
              label: "Quantity",
              className: "mt-8",
              placeholder: "Choose quantity.",
              description: "Default quantity is 1",
              value: quantity,
              onChange: (qty) => {
                !qty || qty < 1 ? setQuantity(1) : setQuantity(qty);
              },
              error: quantity === void 0 || quantity < 1 ? !0 : void 0,
              min: 1
            }, void 0, !1, {
              fileName: "app/routes/__app/items.$slug.tsx",
              lineNumber: 81,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/items.$slug.tsx",
          lineNumber: 62,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-10 lg:col-start-2 lg:row-start-2 lg:max-w-lg lg:self-start",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core10.Button, {
            fullWidth: !0,
            mt: "2.5rem",
            onClick: () => addItemToCart({
              ...item,
              quantity
            }),
            children: "Add to cart"
          }, void 0, !1, {
            fileName: "app/routes/__app/items.$slug.tsx",
            lineNumber: 101,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/items.$slug.tsx",
          lineNumber: 100,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/items.$slug.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/items.$slug.tsx",
    lineNumber: 52,
    columnNumber: 3
  }, this) : null;
}

// app/routes/__app/suppliers.tsx
var suppliers_exports = {};
__export(suppliers_exports, {
  default: () => Suppliers
});
var import_core11 = require("@mantine/core"), import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Suppliers() {
  let { inventories: suppliers } = useAppData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "bg-white",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-16 sm:py-20",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-extrabold tracking-tight text-gray-900",
              children: "Suppliers"
            }, void 0, !1, {
              fileName: "app/routes/__app/suppliers.tsx",
              lineNumber: 14,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8",
              children: suppliers.map((supplier) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "group relative mx-auto sm:mx-[unset]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "aspect-square h-48 overflow-hidden rounded-md bg-gray-200 shadow lg:h-64",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: supplier.image,
                      alt: supplier.name,
                      className: "h-full w-full object-cover object-center transition-all group-hover:scale-105"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/suppliers.tsx",
                      lineNumber: 26,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/suppliers.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "mt-4 text-sm text-gray-700",
                    children: supplier.name
                  }, void 0, !1, {
                    fileName: "app/routes/__app/suppliers.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core11.Anchor, {
                    to: supplier.slug,
                    prefetch: "intent",
                    component: import_react14.Link,
                    className: "absolute inset-0 cursor-pointer"
                  }, void 0, !1, {
                    fileName: "app/routes/__app/suppliers.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                  }, this)
                ]
              }, supplier.id, !0, {
                fileName: "app/routes/__app/suppliers.tsx",
                lineNumber: 21,
                columnNumber: 10
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/__app/suppliers.tsx",
              lineNumber: 18,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/suppliers.tsx",
          lineNumber: 13,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/suppliers.tsx",
        lineNumber: 12,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/suppliers.tsx",
      lineNumber: 11,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/suppliers.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/routes/__app/index.tsx
var app_exports2 = {};
__export(app_exports2, {
  default: () => Dashboard
});
var import_core12 = require("@mantine/core"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuppliersList, {}, void 0, !1, {
      fileName: "app/routes/__app/index.tsx",
      lineNumber: 10,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/index.tsx",
    lineNumber: 9,
    columnNumber: 3
  }, this);
}
function SuppliersList() {
  let { inventories: suppliers } = useAppData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "py-16 sm:py-20",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "md:flex md:items-center md:justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-3xl font-extrabold tracking-tight text-gray-900",
                children: "Suppliers"
              }, void 0, !1, {
                fileName: "app/routes/__app/index.tsx",
                lineNumber: 23,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core12.Anchor, {
                component: import_react15.Link,
                to: "suppliers",
                prefetch: "intent",
                className: "hidden md:block",
                children: [
                  "Browse all suppliers",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    "aria-hidden": "true",
                    children: " \u2192"
                  }, void 0, !1, {
                    fileName: "app/routes/__app/index.tsx",
                    lineNumber: 32,
                    columnNumber: 28
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/index.tsx",
                lineNumber: 26,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/index.tsx",
            lineNumber: 22,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:grid-cols-6 lg:gap-x-8",
            children: suppliers.map((supplier, index) => index >= appConfig_default.cardsLimit ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "group relative mx-auto sm:mx-[unset]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "overflow-hidden rounded-md bg-gray-200 shadow transition-all",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Link, {
                    to: `/suppliers/${supplier.slug}`,
                    prefetch: "intent",
                    className: "overflow-hidden rounded-lg bg-gray-200",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: supplier.image,
                      alt: supplier.name,
                      className: "aspect-square w-full object-cover object-center transition-all group-hover:scale-105"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/index.tsx",
                      lineNumber: 53,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/index.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/index.tsx",
                  lineNumber: 47,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "mt-4 text-sm text-gray-700",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core12.Anchor, {
                    to: `/suppliers/${supplier.slug}`,
                    prefetch: "intent",
                    component: import_react15.Link,
                    children: supplier.name
                  }, void 0, !1, {
                    fileName: "app/routes/__app/index.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/index.tsx",
                  lineNumber: 61,
                  columnNumber: 10
                }, this)
              ]
            }, supplier.id, !0, {
              fileName: "app/routes/__app/index.tsx",
              lineNumber: 43,
              columnNumber: 9
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__app/index.tsx",
            lineNumber: 36,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-8 md:hidden",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core12.Anchor, {
              component: import_react15.Link,
              to: "suppliers",
              prefetch: "intent",
              size: "sm",
              children: [
                "Browse all suppliers",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  "aria-hidden": "true",
                  children: " \u2192"
                }, void 0, !1, {
                  fileName: "app/routes/__app/index.tsx",
                  lineNumber: 77,
                  columnNumber: 28
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/index.tsx",
              lineNumber: 76,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/index.tsx",
            lineNumber: 75,
            columnNumber: 6
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/index.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/index.tsx",
      lineNumber: 20,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/index.tsx",
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

// app/routes/__app/items.tsx
var items_exports = {};
__export(items_exports, {
  default: () => Items
});
var import_core13 = require("@mantine/core"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Items() {
  let { items } = useAppData(), { addItemToCart } = useSupplierCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "bg-white",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-16 sm:py-20",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-extrabold tracking-tight text-gray-900",
              children: "Items"
            }, void 0, !1, {
              fileName: "app/routes/__app/items.tsx",
              lineNumber: 16,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8",
              children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mx-auto sm:mx-[unset]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-48 overflow-hidden rounded-md bg-gray-200 shadow lg:h-64",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: item.image,
                      alt: item.name,
                      className: "h-full w-full object-cover object-center"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/items.tsx",
                      lineNumber: 25,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/items.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "mt-4 text-sm text-gray-700",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Anchor, {
                      to: item.slug,
                      prefetch: "intent",
                      component: import_react16.Link,
                      children: item.name
                    }, void 0, !1, {
                      fileName: "app/routes/__app/items.tsx",
                      lineNumber: 33,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/items.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "mt-1 text-sm font-medium text-gray-900",
                    children: [
                      "$",
                      item.price
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/items.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Button, {
                    variant: "light",
                    fullWidth: !0,
                    type: "submit",
                    mt: "md",
                    onClick: () => addItemToCart({
                      ...item,
                      quantity: 1
                    }),
                    children: "Add to cart"
                  }, void 0, !1, {
                    fileName: "app/routes/__app/items.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                  }, this)
                ]
              }, item.id, !0, {
                fileName: "app/routes/__app/items.tsx",
                lineNumber: 23,
                columnNumber: 10
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/__app/items.tsx",
              lineNumber: 20,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/items.tsx",
          lineNumber: 15,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/items.tsx",
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/items.tsx",
      lineNumber: 13,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/items.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/routes/__app/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  action: () => action6,
  default: () => Cart
});
var import_solid6 = require("@heroicons/react/24/solid"), import_core14 = require("@mantine/core"), import_notifications5 = require("@mantine/notifications"), import_node11 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), React7 = __toESM(require("react"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function action6({ request }) {
  var _a, _b, _c, _d, _e;
  let formData = await request.formData(), user = await getUser(request), intent = (_a = formData.get("intent")) == null ? void 0 : _a.toString();
  if (!user || !intent)
    return unauthorized({ success: !1, message: "Unauthorized" });
  switch (intent) {
    case "send-quote": {
      let stringifiedItems = (_b = formData.get("items[]")) == null ? void 0 : _b.toString(), originalAmount = (_c = formData.get("originalAmount")) == null ? void 0 : _c.toString(), quotedAmount = (_d = formData.get("quotedAmount")) == null ? void 0 : _d.toString();
      if (!stringifiedItems || !originalAmount || !quotedAmount)
        return badRequest({
          success: !1,
          message: "Invalid request body"
        });
      let items = JSON.parse(stringifiedItems);
      return await createQuote({
        userId: user.id,
        inventoryId: (_e = user.inventory) == null ? void 0 : _e.id,
        items,
        amount: Number(quotedAmount),
        originalAmount: Number(originalAmount),
        quotedAmount: Number(quotedAmount)
      }), (0, import_node11.redirect)("/order-history/?success=true");
    }
    default:
      return badRequest({ success: !1, message: "Invalid intent" });
  }
}
function Cart() {
  let fetcher = (0, import_react17.useFetcher)(), { clearCart, itemsInCart, totalPrice } = useSupplierCart(), { user } = useOptionalUser(), [isPaymentModalOpen, setIsPaymentModalOpen] = React7.useState(!1), closePaymentModal = () => setIsPaymentModalOpen(!1), showPaymentModal = () => setIsPaymentModalOpen(!0), sendQuotation = (e) => {
    let formData = new FormData(e.currentTarget);
    formData.append("items[]", JSON.stringify(itemsInCart)), formData.append("originalAmount", totalPrice.toString()), formData.append("intent", "send-quote"), fetcher.submit(formData, {
      method: "post",
      replace: !0
    }), e.preventDefault();
  }, isSubmitting = fetcher.state !== "idle";
  return React7.useEffect(() => {
    if (fetcher.type === "done" && ((0, import_notifications5.cleanNotifications)(), !fetcher.data.success)) {
      (0, import_notifications5.showNotification)({
        title: "Error",
        message: fetcher.data.message,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid6.MinusCircleIcon, {
          className: "h-7 w-7"
        }, void 0, !1, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        color: "red"
      });
      return;
    }
  }, [fetcher.data, fetcher.type]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col gap-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "py-16 px-4 sm:px-4 sm:py-20",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                        className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                        children: "Current items"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/cart.tsx",
                        lineNumber: 119,
                        columnNumber: 10
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 118,
                      columnNumber: 9
                    }, this),
                    itemsInCart.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "space-x-2",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Button, {
                        variant: "outline",
                        color: "red",
                        onClick: () => clearCart(),
                        disabled: isSubmitting,
                        children: "Clear"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/cart.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 125,
                      columnNumber: 10
                    }, this) : null
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 117,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-16",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                      className: "sr-only",
                      children: "Current items in cart"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 139,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex flex-col gap-12",
                      children: itemsInCart.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartItems, {
                        showPaymentModal
                      }, void 0, !1, {
                        fileName: "app/routes/__app/cart.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState2, {}, void 0, !1, {
                        fileName: "app/routes/__app/cart.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 141,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 138,
                  columnNumber: 8
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 116,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/cart.tsx",
            lineNumber: 115,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 114,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 113,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Modal, {
        opened: !!user && isPaymentModalOpen,
        onClose: closePaymentModal,
        title: "Quote",
        centered: !0,
        overlayBlur: 1,
        overlayOpacity: 0.5,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          className: "flex flex-col gap-4",
          onSubmit: (e) => sendQuotation(e),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col gap-2",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-sm text-gray-600",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-semibold",
                    children: "Amount: "
                  }, void 0, !1, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 170,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: [
                      "$",
                      totalPrice.toFixed(2)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 171,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 169,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 168,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.NumberInput, {
              name: "quotedAmount",
              label: "Quotation Price",
              placeholder: "Enter quotation amount",
              required: !0,
              icon: "$",
              defaultValue: totalPrice,
              min: 0,
              precision: 2,
              step: 0.01
            }, void 0, !1, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 175,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 flex items-center gap-4 sm:justify-end",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Button, {
                  variant: "subtle",
                  color: "red",
                  onClick: () => closePaymentModal(),
                  children: "Cancel"
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 188,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Button, {
                  variant: "filled",
                  type: "submit",
                  loading: isSubmitting,
                  loaderPosition: "right",
                  children: "Send Quote"
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 196,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 187,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 162,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 154,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/cart.tsx",
    lineNumber: 112,
    columnNumber: 3
  }, this);
}
function CartItems({ showPaymentModal }) {
  let { itemsInCart, removeItemFromCart, totalPrice } = useSupplierCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        "aria-labelledby": "cart-heading",
        className: "lg:col-span-7",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
          className: "divide-y divide-gray-200 border-b border-t border-gray-200",
          children: itemsInCart.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            className: "flex py-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex-shrink-0",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: item.image,
                  alt: item.name,
                  className: "aspect-square h-10 w-10 rounded-full object-cover"
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 221,
                  columnNumber: 9
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 220,
                columnNumber: 8
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "ml-4 flex flex-1 flex-col justify-between sm:ml-6",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex justify-between",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                            className: "text-sm",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
                              to: `/items/${item.slug}`,
                              className: "font-medium text-gray-700 hover:text-gray-800",
                              children: item.name
                            }, void 0, !1, {
                              fileName: "app/routes/__app/cart.tsx",
                              lineNumber: 233,
                              columnNumber: 13
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/__app/cart.tsx",
                            lineNumber: 232,
                            columnNumber: 12
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 231,
                          columnNumber: 11
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "mt-1 text-sm font-medium text-gray-900",
                          children: [
                            "$",
                            item.price.toFixed(2),
                            "/unit"
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 241,
                          columnNumber: 11
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 230,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-4 sm:mt-0 sm:pr-9",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          children: item.quantity
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 247,
                          columnNumber: 11
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "absolute right-0 top-0",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            type: "button",
                            className: "-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "sr-only",
                                children: "Remove"
                              }, void 0, !1, {
                                fileName: "app/routes/__app/cart.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.ActionIcon, {
                                onClick: () => removeItemFromCart(item.id),
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid6.XMarkIcon, {
                                  className: "h-5 w-5",
                                  "aria-hidden": "true"
                                }, void 0, !1, {
                                  fileName: "app/routes/__app/cart.tsx",
                                  lineNumber: 256,
                                  columnNumber: 14
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/__app/cart.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/__app/cart.tsx",
                            lineNumber: 250,
                            columnNumber: 12
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 249,
                          columnNumber: 11
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 246,
                      columnNumber: 10
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 229,
                  columnNumber: 9
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 228,
                columnNumber: 8
              }, this)
            ]
          }, item.id, !0, {
            fileName: "app/routes/__app/cart.tsx",
            lineNumber: 219,
            columnNumber: 7
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 217,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 216,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        "aria-labelledby": "summary-heading",
        className: "mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            id: "summary-heading",
            className: "text-lg font-medium text-gray-900",
            children: "Quote summary"
          }, void 0, !1, {
            fileName: "app/routes/__app/cart.tsx",
            lineNumber: 272,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
            className: "mt-6 space-y-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center justify-between border-t border-gray-200 pt-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                  className: "text-base font-medium text-gray-900",
                  children: "Total"
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 278,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                  className: "text-base font-medium text-gray-900",
                  children: [
                    "$",
                    totalPrice.toFixed(2)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 279,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 277,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/cart.tsx",
            lineNumber: 276,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-6",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Button, {
              type: "submit",
              fullWidth: !0,
              onClick: () => showPaymentModal(),
              children: "Send Quote"
            }, void 0, !1, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 286,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/cart.tsx",
            lineNumber: 285,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 268,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/cart.tsx",
    lineNumber: 215,
    columnNumber: 3
  }, this);
}
function EmptyState2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid6.ShoppingCartIcon, {
        className: "mx-auto h-9 w-9 text-gray-500"
      }, void 0, !1, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 298,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "mt-4 block text-sm font-medium text-gray-500",
        children: "Your cart is empty"
      }, void 0, !1, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 299,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/cart.tsx",
    lineNumber: 297,
    columnNumber: 3
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => AppLayout2,
  loader: () => loader8,
  unstable_shouldReload: () => unstable_shouldReload
});
var import_solid7 = require("@heroicons/react/24/solid"), import_core15 = require("@mantine/core"), import_node12 = require("@remix-run/node"), import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => (await requireUserId(request), await isCustomer(request) ? (0, import_node12.redirect)("/") : await isStoreManager(request) ? (0, import_node12.redirect)("/store-manager") : await isStaff(request) ? (0, import_node12.redirect)("/staff") : (0, import_node12.json)({}));
function AppLayout2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex h-full flex-col",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderComponent2, {}, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 41,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.ScrollArea, {
          classNames: { root: "flex-1 bg-gray-100" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Outlet, {}, void 0, !1, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 44,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 43,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 42,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterComponent2, {}, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 48,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 39,
    columnNumber: 3
  }, this);
}
function HeaderComponent2() {
  let location = (0, import_react18.useLocation)(), { user } = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Form, {
        replace: !0,
        action: "/api/auth/logout",
        method: "post",
        id: "logout-form"
      }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 60,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "max-h-28 bg-gray-900 py-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-full w-full items-center justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-shrink-0 items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Anchor, {
                  component: import_react18.Link,
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "h-16 object-cover object-center",
                    src: appConfig_default.logo,
                    alt: "Logo"
                  }, void 0, !1, {
                    fileName: "app/routes/admin.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/admin.tsx",
                  lineNumber: 66,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 64,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Menu, {
                  position: "bottom-start",
                  withArrow: !0,
                  transition: "pop-top-right",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Menu.Target, {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Avatar, {
                          color: "blue",
                          size: "md",
                          children: [
                            user.firstName.charAt(0),
                            user.lastName.charAt(0)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/admin.tsx",
                          lineNumber: 84,
                          columnNumber: 12
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Avatar, {}, void 0, !1, {
                          fileName: "app/routes/admin.tsx",
                          lineNumber: 89,
                          columnNumber: 12
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/admin.tsx",
                        lineNumber: 82,
                        columnNumber: 10
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/admin.tsx",
                      lineNumber: 81,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Menu.Dropdown, {
                      children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Menu.Item, {
                            disabled: !0,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "flex flex-col",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  children: [
                                    user.firstName,
                                    user.lastName
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/admin.tsx",
                                  lineNumber: 99,
                                  columnNumber: 14
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  className: "mt-0.5 text-sm",
                                  children: user.email
                                }, void 0, !1, {
                                  fileName: "app/routes/admin.tsx",
                                  lineNumber: 103,
                                  columnNumber: 14
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/admin.tsx",
                              lineNumber: 98,
                              columnNumber: 13
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 97,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Divider, {}, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 106,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid7.ArrowLeftOnRectangleIcon, {
                              className: "h-4 w-4"
                            }, void 0, !1, {
                              fileName: "app/routes/admin.tsx",
                              lineNumber: 109,
                              columnNumber: 19
                            }, this),
                            type: "submit",
                            form: "logout-form",
                            children: "Logout"
                          }, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 108,
                            columnNumber: 12
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/admin.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid7.ArrowRightOnRectangleIcon, {
                              className: "h-4 w-4"
                            }, void 0, !1, {
                              fileName: "app/routes/admin.tsx",
                              lineNumber: 119,
                              columnNumber: 19
                            }, this),
                            component: import_react18.Link,
                            to: `/login?redirectTo=${encodeURIComponent(
                              location.pathname
                            )}`,
                            children: "Login"
                          }, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 118,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid7.UserPlusIcon, {
                              className: "h-4 w-4"
                            }, void 0, !1, {
                              fileName: "app/routes/admin.tsx",
                              lineNumber: 128,
                              columnNumber: 19
                            }, this),
                            component: import_react18.Link,
                            to: `/register?redirectTo=${encodeURIComponent(
                              location.pathname
                            )}`,
                            children: "Create account"
                          }, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 127,
                            columnNumber: 12
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/admin.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/admin.tsx",
                      lineNumber: 94,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/admin.tsx",
                  lineNumber: 76,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 75,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 63,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 62,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 61,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 59,
    columnNumber: 3
  }, this);
}
function FooterComponent2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Footer, {
    height: 44,
    p: "md",
    className: "flex items-center justify-center py-1 text-center text-sm",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-gray-400",
      children: [
        "\xA9",
        new Date().getFullYear(),
        " ",
        appConfig_default.name,
        ", Inc. All rights reserved."
      ]
    }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 155,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 150,
    columnNumber: 3
  }, this);
}
var unstable_shouldReload = ({
  submission,
  prevUrl,
  url
}) => !(!submission && prevUrl.pathname === url.pathname);

// app/routes/admin/suppliers.tsx
var suppliers_exports2 = {};
__export(suppliers_exports2, {
  action: () => action7,
  default: () => ManageSuppliers,
  loader: () => loader9
});
var import_solid8 = require("@heroicons/react/24/solid"), import_core16 = require("@mantine/core"), import_hooks11 = require("@mantine/hooks"), import_client9 = require("@prisma/client"), import_node13 = require("@remix-run/node"), import_react19 = require("@remix-run/react"), import_bson = require("bson"), React8 = __toESM(require("react")), import_slugify = __toESM(require("slugify")), import_zod3 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AddSupplierSchema = import_zod3.z.object({
  firstName: import_zod3.z.string().min(1, "First name is required"),
  lastName: import_zod3.z.string().min(1, "Location is required"),
  email: import_zod3.z.string().email("Please enter a valid email"),
  password: import_zod3.z.string().min(8, "Password must be at least 8 characters")
}), loader9 = async () => {
  let supplier = await prisma.user.findMany({
    where: { role: import_client9.Role.STAFF }
  });
  return (0, import_node13.json)({ supplier });
}, action7 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, AddSupplierSchema);
  if (fieldErrors)
    return badRequest({ success: !1, fieldErrors });
  let { email: email2, firstName, lastName, password: password2 } = fields, id = new import_bson.ObjectId().toString();
  return await prisma.user.create({
    data: {
      id,
      firstName,
      lastName,
      email: email2,
      passwordHash: await createPasswordHash(password2),
      role: import_client9.Role.STAFF
    }
  }), await prisma.supplier.create({
    data: {
      id,
      name: firstName,
      image: "https://images.unsplash.com/photo-1615822461480-f303cdb9cad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      slug: (0, import_slugify.default)(firstName, { lower: !0, strict: !0 })
    }
  }), (0, import_node13.json)({ success: !0 });
};
function ManageSuppliers() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let fetcher = (0, import_react19.useFetcher)(), { supplier: stores } = (0, import_react19.useLoaderData)(), [isModalOpen, handleModal] = (0, import_hooks11.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React8.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && handleModal.close();
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        className: "rounded-md bg-white",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-8 px-4 py-10 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:flex sm:flex-auto sm:items-center sm:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Button, {
                      leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid8.ArrowLeftIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/admin/suppliers.tsx",
                        lineNumber: 99,
                        columnNumber: 19
                      }, this),
                      variant: "white",
                      size: "md",
                      component: import_react19.Link,
                      to: "..",
                      pl: 0,
                      mb: 20,
                      color: "gray",
                      children: "Back"
                    }, void 0, !1, {
                      fileName: "app/routes/admin/suppliers.tsx",
                      lineNumber: 98,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-3xl font-semibold text-gray-900",
                      children: "Manage Suppliers"
                    }, void 0, !1, {
                      fileName: "app/routes/admin/suppliers.tsx",
                      lineNumber: 110,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "mt-2 text-sm text-gray-700",
                      children: "A list of all the suppliers."
                    }, void 0, !1, {
                      fileName: "app/routes/admin/suppliers.tsx",
                      lineNumber: 113,
                      columnNumber: 8
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/admin/suppliers.tsx",
                  lineNumber: 97,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Button, {
                    loading: isSubmitting,
                    loaderPosition: "left",
                    onClick: () => handleModal.open(),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid8.PlusIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/admin/suppliers.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "ml-2",
                        children: "Add Supplier"
                      }, void 0, !1, {
                        fileName: "app/routes/admin/suppliers.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/admin/suppliers.tsx",
                    lineNumber: 118,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/admin/suppliers.tsx",
                  lineNumber: 117,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/admin/suppliers.tsx",
              lineNumber: 96,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-8 flex flex-col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                    className: "min-w-full divide-y divide-gray-300",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
                              children: "Name"
                            }, void 0, !1, {
                              fileName: "app/routes/admin/suppliers.tsx",
                              lineNumber: 134,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:table-cell",
                              children: "Email"
                            }, void 0, !1, {
                              fileName: "app/routes/admin/suppliers.tsx",
                              lineNumber: 141,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                            }, void 0, !1, {
                              fileName: "app/routes/admin/suppliers.tsx",
                              lineNumber: 147,
                              columnNumber: 12
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/admin/suppliers.tsx",
                          lineNumber: 133,
                          columnNumber: 11
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/admin/suppliers.tsx",
                        lineNumber: 132,
                        columnNumber: 10
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                        className: "divide-y divide-gray-200",
                        children: stores.map((supplier) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: [
                                supplier.firstName,
                                " (",
                                supplier.lastName,
                                ")"
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/admin/suppliers.tsx",
                              lineNumber: 156,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: supplier.email
                            }, void 0, !1, {
                              fileName: "app/routes/admin/suppliers.tsx",
                              lineNumber: 159,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "flex items-center gap-6"
                              }, void 0, !1, {
                                fileName: "app/routes/admin/suppliers.tsx",
                                lineNumber: 163,
                                columnNumber: 14
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/admin/suppliers.tsx",
                              lineNumber: 162,
                              columnNumber: 13
                            }, this)
                          ]
                        }, supplier.id, !0, {
                          fileName: "app/routes/admin/suppliers.tsx",
                          lineNumber: 155,
                          columnNumber: 12
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/routes/admin/suppliers.tsx",
                        lineNumber: 153,
                        columnNumber: 10
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/admin/suppliers.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/admin/suppliers.tsx",
                  lineNumber: 130,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/admin/suppliers.tsx",
                lineNumber: 129,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/admin/suppliers.tsx",
              lineNumber: 128,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/admin/suppliers.tsx",
          lineNumber: 95,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/suppliers.tsx",
        lineNumber: 94,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Modal, {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Add Supplier",
        centered: !0,
        overlayBlur: 1.2,
        overlayOpacity: 0.6,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            disabled: isSubmitting,
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.TextInput, {
                name: "firstName",
                label: "Name",
                error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.firstName,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/suppliers.tsx",
                lineNumber: 185,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.TextInput, {
                name: "lastName",
                label: "Last Name",
                error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.lastName,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/suppliers.tsx",
                lineNumber: 191,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.TextInput, {
                name: "email",
                type: "email",
                label: "Email",
                error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.email,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/suppliers.tsx",
                lineNumber: 198,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.PasswordInput, {
                name: "password",
                label: "Password",
                error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.password,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/suppliers.tsx",
                lineNumber: 206,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1 flex items-center justify-end gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Button, {
                    variant: "subtle",
                    disabled: isSubmitting,
                    onClick: () => handleModal.close(),
                    color: "red",
                    children: "Cancel"
                  }, void 0, !1, {
                    fileName: "app/routes/admin/suppliers.tsx",
                    lineNumber: 214,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Button, {
                    type: "submit",
                    loading: isSubmitting,
                    loaderPosition: "right",
                    children: "Add"
                  }, void 0, !1, {
                    fileName: "app/routes/admin/suppliers.tsx",
                    lineNumber: 222,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/admin/suppliers.tsx",
                lineNumber: 213,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/suppliers.tsx",
            lineNumber: 184,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/suppliers.tsx",
          lineNumber: 183,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/suppliers.tsx",
        lineNumber: 175,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/admin/suppliers.tsx",
    lineNumber: 93,
    columnNumber: 3
  }, this);
}

// app/routes/admin/stores.tsx
var stores_exports = {};
__export(stores_exports, {
  action: () => action8,
  default: () => ManageStore,
  loader: () => loader10
});
var import_solid9 = require("@heroicons/react/24/solid"), import_core17 = require("@mantine/core"), import_hooks12 = require("@mantine/hooks"), import_client10 = require("@prisma/client"), import_node14 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), React9 = __toESM(require("react")), import_zod4 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AddStoreSchema = import_zod4.z.object({
  firstName: import_zod4.z.string().min(1, "First name is required"),
  lastName: import_zod4.z.string().min(1, "Location is required"),
  email: import_zod4.z.string().email("Please enter a valid email"),
  password: import_zod4.z.string().min(8, "Password must be at least 8 characters")
}), loader10 = async () => {
  let stores = await prisma.user.findMany({
    where: { role: import_client10.Role.STORE_MANAGER }
  });
  return (0, import_node14.json)({ stores });
}, action8 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, AddStoreSchema);
  if (fieldErrors)
    return badRequest({ success: !1, fieldErrors });
  let { email: email2, firstName, lastName, password: password2 } = fields;
  return await prisma.user.create({
    data: {
      firstName,
      lastName,
      email: email2,
      passwordHash: await createPasswordHash(password2),
      role: import_client10.Role.STORE_MANAGER
    }
  }), (0, import_node14.json)({ success: !0 });
};
function ManageStore() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let fetcher = (0, import_react20.useFetcher)(), { stores } = (0, import_react20.useLoaderData)(), [isModalOpen, handleModal] = (0, import_hooks12.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React9.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && handleModal.close();
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        className: "rounded-md bg-white",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-8 px-4 py-10 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:flex sm:flex-auto sm:items-center sm:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                      leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid9.ArrowLeftIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/admin/stores.tsx",
                        lineNumber: 85,
                        columnNumber: 19
                      }, this),
                      variant: "white",
                      size: "md",
                      component: import_react20.Link,
                      to: "..",
                      pl: 0,
                      mb: 20,
                      color: "gray",
                      children: "Back"
                    }, void 0, !1, {
                      fileName: "app/routes/admin/stores.tsx",
                      lineNumber: 84,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-3xl font-semibold text-gray-900",
                      children: "Manage Stores"
                    }, void 0, !1, {
                      fileName: "app/routes/admin/stores.tsx",
                      lineNumber: 96,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "mt-2 text-sm text-gray-700",
                      children: "A list of all the stores in the system."
                    }, void 0, !1, {
                      fileName: "app/routes/admin/stores.tsx",
                      lineNumber: 99,
                      columnNumber: 8
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/admin/stores.tsx",
                  lineNumber: 83,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                    loading: isSubmitting,
                    loaderPosition: "left",
                    onClick: () => handleModal.open(),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid9.PlusIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/admin/stores.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "ml-2",
                        children: "Add Store"
                      }, void 0, !1, {
                        fileName: "app/routes/admin/stores.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/admin/stores.tsx",
                    lineNumber: 104,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/admin/stores.tsx",
                  lineNumber: 103,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/admin/stores.tsx",
              lineNumber: 82,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-8 flex flex-col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                    className: "min-w-full divide-y divide-gray-300",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
                              children: "Name"
                            }, void 0, !1, {
                              fileName: "app/routes/admin/stores.tsx",
                              lineNumber: 120,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:table-cell",
                              children: "Email"
                            }, void 0, !1, {
                              fileName: "app/routes/admin/stores.tsx",
                              lineNumber: 127,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                            }, void 0, !1, {
                              fileName: "app/routes/admin/stores.tsx",
                              lineNumber: 133,
                              columnNumber: 12
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/admin/stores.tsx",
                          lineNumber: 119,
                          columnNumber: 11
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/admin/stores.tsx",
                        lineNumber: 118,
                        columnNumber: 10
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                        className: "divide-y divide-gray-200",
                        children: stores.map((vendor) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: [
                                vendor.firstName,
                                " (",
                                vendor.lastName,
                                ")"
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/admin/stores.tsx",
                              lineNumber: 142,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: vendor.email
                            }, void 0, !1, {
                              fileName: "app/routes/admin/stores.tsx",
                              lineNumber: 145,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "flex items-center gap-6"
                              }, void 0, !1, {
                                fileName: "app/routes/admin/stores.tsx",
                                lineNumber: 149,
                                columnNumber: 14
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/admin/stores.tsx",
                              lineNumber: 148,
                              columnNumber: 13
                            }, this)
                          ]
                        }, vendor.id, !0, {
                          fileName: "app/routes/admin/stores.tsx",
                          lineNumber: 141,
                          columnNumber: 12
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/routes/admin/stores.tsx",
                        lineNumber: 139,
                        columnNumber: 10
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/admin/stores.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/admin/stores.tsx",
                  lineNumber: 116,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/admin/stores.tsx",
                lineNumber: 115,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/admin/stores.tsx",
              lineNumber: 114,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/admin/stores.tsx",
          lineNumber: 81,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/stores.tsx",
        lineNumber: 80,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Modal, {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Add Vendor",
        centered: !0,
        overlayBlur: 1.2,
        overlayOpacity: 0.6,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            disabled: isSubmitting,
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.TextInput, {
                name: "firstName",
                label: "Name",
                error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.firstName,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/stores.tsx",
                lineNumber: 171,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.TextInput, {
                name: "lastName",
                label: "Last Name",
                error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.lastName,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/stores.tsx",
                lineNumber: 177,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.TextInput, {
                name: "email",
                type: "email",
                label: "Email",
                error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.email,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/stores.tsx",
                lineNumber: 184,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.PasswordInput, {
                name: "password",
                label: "Password",
                error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.password,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/stores.tsx",
                lineNumber: 192,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1 flex items-center justify-end gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                    variant: "subtle",
                    disabled: isSubmitting,
                    onClick: () => handleModal.close(),
                    color: "red",
                    children: "Cancel"
                  }, void 0, !1, {
                    fileName: "app/routes/admin/stores.tsx",
                    lineNumber: 200,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                    type: "submit",
                    loading: isSubmitting,
                    loaderPosition: "right",
                    children: "Add"
                  }, void 0, !1, {
                    fileName: "app/routes/admin/stores.tsx",
                    lineNumber: 208,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/admin/stores.tsx",
                lineNumber: 199,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/stores.tsx",
            lineNumber: 170,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/stores.tsx",
          lineNumber: 169,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/stores.tsx",
        lineNumber: 161,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/admin/stores.tsx",
    lineNumber: 79,
    columnNumber: 3
  }, this);
}

// app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminDashboard,
  loader: () => loader11
});
var import_solid10 = require("@heroicons/react/24/solid"), import_node15 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_clsx = __toESM(require("clsx"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), actions = [
  {
    title: "Suppliers",
    description: "View and manage supppliers",
    href: "suppliers",
    icon: import_solid10.UserGroupIcon
  },
  {
    title: "Store",
    description: "View and manage stores",
    href: "stores",
    icon: import_solid10.BuildingOfficeIcon
  }
], loader11 = async ({ request }) => (0, import_node15.json)({});
function AdminDashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4 p-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "bg-white",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-16 px-4 sm:py-20 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-extrabold tracking-tight text-gray-900",
              children: "Admin Dashboard"
            }, void 0, !1, {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 33,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-12 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0",
              children: actions.map((action13, actionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
                action: action13,
                actionIdx
              }, actionIdx, !1, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 39,
                columnNumber: 9
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 37,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 32,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this);
}
function Card({
  action: action13,
  actionIdx
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_clsx.default)(
      actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
      actionIdx === 1 ? "sm:rounded-tr-lg" : "",
      actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
      actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
      "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: (0, import_clsx.default)(
            "text-blue-700",
            "bg-blue-50",
            "inline-flex rounded-lg p-3 ring-4 ring-white"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(action13.icon, {
            className: "h-6 w-6",
            "aria-hidden": "true"
          }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 77,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 70,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 69,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            className: "text-lg font-medium",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react21.Link, {
              to: action13.href,
              className: "focus:outline-none",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "absolute inset-0",
                  "aria-hidden": "true"
                }, void 0, !1, {
                  fileName: "app/routes/admin/index.tsx",
                  lineNumber: 84,
                  columnNumber: 7
                }, this),
                action13.title
              ]
            }, void 0, !0, {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 82,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 81,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "mt-2 text-sm text-gray-500",
            children: action13.description
          }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 88,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 80,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400",
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
          className: "h-6 w-6",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
          }, void 0, !1, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 100,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 94,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 90,
        columnNumber: 4
      }, this)
    ]
  }, action13.title, !0, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 57,
    columnNumber: 3
  }, this);
}

// app/routes/staff.tsx
var staff_exports = {};
__export(staff_exports, {
  default: () => AppLayout3,
  loader: () => loader12,
  unstable_shouldReload: () => unstable_shouldReload2
});
var import_solid11 = require("@heroicons/react/24/solid"), import_core18 = require("@mantine/core"), import_hooks13 = require("@mantine/hooks"), import_node16 = require("@remix-run/node"), import_react22 = require("@remix-run/react");
var React10 = __toESM(require("react")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => {
  let user = await requireUser(request);
  return await isCustomer(request) ? (0, import_node16.redirect)("/") : (0, import_node16.json)({
    hasResetPassword: user.hasResetPassword
  });
};
function AppLayout3() {
  let { user } = useUser(), fetcher = (0, import_react22.useFetcher)(), { hasResetPassword } = (0, import_react22.useLoaderData)(), [isModalOpen, handleModal] = (0, import_hooks13.useDisclosure)(!hasResetPassword), isSubmitting = fetcher.state !== "idle";
  return React10.useEffect(() => {
    fetcher.type === "done" && (!fetcher.data.success || handleModal.close());
  }, [fetcher.data, fetcher.type, handleModal]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex h-full flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderComponent3, {}, void 0, !1, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 73,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.ScrollArea, {
            classNames: { root: "flex-1 bg-gray-100" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Outlet, {}, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 76,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/staff.tsx",
              lineNumber: 75,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 74,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterComponent3, {}, void 0, !1, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 80,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/staff.tsx",
        lineNumber: 72,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Drawer, {
        opened: isModalOpen,
        onClose: handleModal.close,
        title: "Reset Password",
        overlayBlur: 3,
        overlayOpacity: 0.8,
        padding: "xl",
        position: "right",
        withCloseButton: !1,
        closeOnEscape: !1,
        closeOnClickOutside: !1,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          className: "flex flex-col gap-4",
          action: "/api/reset-password",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-6 flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                hidden: !0,
                name: "userId",
                defaultValue: user.id
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 102,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.PasswordInput, {
                required: !0,
                name: "password",
                label: "Enter new password",
                placeholder: "Password"
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 103,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Button, {
                variant: "filled",
                type: "submit",
                fullWidth: !0,
                loading: isSubmitting,
                loaderPosition: "right",
                children: "Update"
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 110,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 101,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff.tsx",
          lineNumber: 95,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff.tsx",
        lineNumber: 83,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/staff.tsx",
    lineNumber: 71,
    columnNumber: 3
  }, this);
}
function HeaderComponent3() {
  let location = (0, import_react22.useLocation)(), { user } = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Form, {
        replace: !0,
        action: "/api/auth/logout",
        method: "post",
        id: "logout-form"
      }, void 0, !1, {
        fileName: "app/routes/staff.tsx",
        lineNumber: 132,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "max-h-28 bg-gray-900 py-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-full w-full items-center justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-shrink-0 items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Anchor, {
                  component: import_react22.Link,
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "h-16 object-cover object-center",
                    src: appConfig_default.logo,
                    alt: "Logo"
                  }, void 0, !1, {
                    fileName: "app/routes/staff.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff.tsx",
                  lineNumber: 137,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 136,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Menu, {
                  position: "bottom-start",
                  withArrow: !0,
                  transition: "pop-top-right",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Menu.Target, {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Avatar, {
                          color: "blue",
                          size: "md",
                          children: [
                            user.firstName.charAt(0),
                            user.lastName.charAt(0)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/staff.tsx",
                          lineNumber: 155,
                          columnNumber: 12
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Avatar, {}, void 0, !1, {
                          fileName: "app/routes/staff.tsx",
                          lineNumber: 160,
                          columnNumber: 12
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/staff.tsx",
                        lineNumber: 153,
                        columnNumber: 10
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/staff.tsx",
                      lineNumber: 152,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Menu.Dropdown, {
                      children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Menu.Item, {
                            disabled: !0,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "flex flex-col",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  children: [
                                    user.firstName,
                                    user.lastName
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/staff.tsx",
                                  lineNumber: 170,
                                  columnNumber: 14
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  className: "mt-0.5 text-sm",
                                  children: user.email
                                }, void 0, !1, {
                                  fileName: "app/routes/staff.tsx",
                                  lineNumber: 174,
                                  columnNumber: 14
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/staff.tsx",
                              lineNumber: 169,
                              columnNumber: 13
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/staff.tsx",
                            lineNumber: 168,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Divider, {}, void 0, !1, {
                            fileName: "app/routes/staff.tsx",
                            lineNumber: 177,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid11.ArrowLeftOnRectangleIcon, {
                              className: "h-4 w-4"
                            }, void 0, !1, {
                              fileName: "app/routes/staff.tsx",
                              lineNumber: 180,
                              columnNumber: 19
                            }, this),
                            type: "submit",
                            form: "logout-form",
                            children: "Logout"
                          }, void 0, !1, {
                            fileName: "app/routes/staff.tsx",
                            lineNumber: 179,
                            columnNumber: 12
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/staff.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid11.ArrowRightOnRectangleIcon, {
                              className: "h-4 w-4"
                            }, void 0, !1, {
                              fileName: "app/routes/staff.tsx",
                              lineNumber: 190,
                              columnNumber: 19
                            }, this),
                            component: import_react22.Link,
                            to: `/login?redirectTo=${encodeURIComponent(
                              location.pathname
                            )}`,
                            children: "Login"
                          }, void 0, !1, {
                            fileName: "app/routes/staff.tsx",
                            lineNumber: 189,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid11.UserPlusIcon, {
                              className: "h-4 w-4"
                            }, void 0, !1, {
                              fileName: "app/routes/staff.tsx",
                              lineNumber: 199,
                              columnNumber: 19
                            }, this),
                            component: import_react22.Link,
                            to: `/register?redirectTo=${encodeURIComponent(
                              location.pathname
                            )}`,
                            children: "Create account"
                          }, void 0, !1, {
                            fileName: "app/routes/staff.tsx",
                            lineNumber: 198,
                            columnNumber: 12
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/staff.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/staff.tsx",
                      lineNumber: 165,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/staff.tsx",
                  lineNumber: 147,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 146,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 135,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff.tsx",
          lineNumber: 134,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff.tsx",
        lineNumber: 133,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/staff.tsx",
    lineNumber: 131,
    columnNumber: 3
  }, this);
}
function FooterComponent3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Footer, {
    height: 44,
    p: "md",
    className: "flex items-center justify-center py-1 text-center text-sm",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-gray-400",
      children: [
        "\xA9",
        new Date().getFullYear(),
        " ",
        appConfig_default.name,
        ", Inc. All rights reserved."
      ]
    }, void 0, !0, {
      fileName: "app/routes/staff.tsx",
      lineNumber: 226,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/staff.tsx",
    lineNumber: 221,
    columnNumber: 3
  }, this);
}
var unstable_shouldReload2 = ({
  submission,
  prevUrl,
  url
}) => !(!submission && prevUrl.pathname === url.pathname);

// app/routes/staff/products.tsx
var products_exports = {};
__export(products_exports, {
  action: () => action9,
  default: () => ManageProducts,
  loader: () => loader13
});
var import_solid12 = require("@heroicons/react/24/solid"), import_core19 = require("@mantine/core"), import_hooks15 = require("@mantine/hooks"), import_node17 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_bson2 = require("bson"), import_clsx2 = __toESM(require("clsx")), React11 = __toESM(require("react")), import_zod5 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader13 = async ({ request }) => {
  let supplierId = await requireUserId(request), supplier = await prisma.supplier.findFirst({
    where: {
      id: supplierId
    },
    include: {
      items: !0
    }
  }), products = (supplier == null ? void 0 : supplier.items) ?? [];
  return (0, import_node17.json)({ products });
};
var ManageProductSchema = import_zod5.z.object({
  productId: import_zod5.z.string().optional(),
  name: import_zod5.z.string().min(1, "First name is required"),
  image: import_zod5.z.string().min(1, "Location is required"),
  price: import_zod5.z.preprocess(Number, import_zod5.z.number().min(1, "Price is required")),
  quantity: import_zod5.z.preprocess(Number, import_zod5.z.number().min(1, "Quantity is required")),
  description: import_zod5.z.string().min(1, "Description is required")
}), action9 = async ({ request }) => {
  let supplierId = await requireUserId(request), { fields, fieldErrors } = await validateAction(
    request,
    ManageProductSchema
  );
  if (fieldErrors)
    return badRequest({ success: !1, fieldErrors });
  if (!await prisma.supplier.findFirst())
    return badRequest({ success: !1 });
  let id = new import_bson2.ObjectId();
  return await prisma.item.upsert({
    where: {
      id: fields.productId || id.toString()
    },
    update: {
      name: fields.name,
      image: fields.image,
      price: fields.price,
      quantity: fields.quantity,
      description: fields.description,
      slug: Math.random().toString(36).substring(2, 15)
    },
    create: {
      id: id.toString(),
      name: fields.name,
      image: fields.image,
      price: fields.price,
      quantity: fields.quantity,
      description: fields.description,
      slug: Math.random().toString(36).substring(2, 15),
      supplierId
    }
  }), (0, import_node17.json)({ success: !0 });
};
function ManageProducts() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let fetcher = (0, import_react23.useFetcher)(), { products } = (0, import_react23.useLoaderData)(), [isModalOpen, handleModal] = (0, import_hooks15.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  React11.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && handleModal.close();
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]);
  let [mode, setMode] = React11.useState(0 /* edit */), [selectedProductId, setSelectedProductId] = React11.useState(), [selectedProduct, setSelectedProduct] = React11.useState(null);
  return React11.useEffect(() => {
    if (!selectedProductId) {
      setSelectedProduct(null);
      return;
    }
    let _product = products.find((v) => v.id === selectedProductId);
    !_product || (setSelectedProduct(_product), handleModal.open());
  }, [selectedProductId]), React11.useEffect(() => {
    mode === 1 /* add */ && (setSelectedProductId(null), setSelectedProduct(null));
  }, [mode]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        className: "rounded-md bg-white",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-8 px-4 py-10 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:flex sm:flex-auto sm:items-center sm:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                      leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid12.ArrowLeftIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/staff/products.tsx",
                        lineNumber: 157,
                        columnNumber: 19
                      }, this),
                      variant: "white",
                      size: "md",
                      component: import_react23.Link,
                      to: "..",
                      pl: 0,
                      mb: 20,
                      color: "gray",
                      children: "Back"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/products.tsx",
                      lineNumber: 156,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-3xl font-semibold text-gray-900",
                      children: [
                        "Manage Products",
                        " "
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/staff/products.tsx",
                      lineNumber: 168,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "mt-2 text-sm text-gray-700",
                      children: "A list of all the products in your inventory."
                    }, void 0, !1, {
                      fileName: "app/routes/staff/products.tsx",
                      lineNumber: 171,
                      columnNumber: 8
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/staff/products.tsx",
                  lineNumber: 155,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                    loading: isSubmitting,
                    loaderPosition: "left",
                    onClick: () => {
                      setMode(1 /* add */), handleModal.open();
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid12.PlusIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/staff/products.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "ml-2",
                        children: "Add Product"
                      }, void 0, !1, {
                        fileName: "app/routes/staff/products.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/staff/products.tsx",
                    lineNumber: 176,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff/products.tsx",
                  lineNumber: 175,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/staff/products.tsx",
              lineNumber: 154,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-8 flex flex-col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                    className: "min-w-full divide-y divide-gray-300",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
                              children: "Name"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 196,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:table-cell",
                              children: "Image"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 203,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:table-cell",
                              children: "Price"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 209,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:table-cell",
                              children: "Quantity"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 215,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 221,
                              columnNumber: 12
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/staff/products.tsx",
                          lineNumber: 195,
                          columnNumber: 11
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/staff/products.tsx",
                        lineNumber: 194,
                        columnNumber: 10
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                        className: "divide-y divide-gray-200",
                        children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: product.name
                            }, void 0, !1, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 230,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                                src: product.image,
                                alt: "",
                                className: "aspect-square h-8 w-8 rounded-full"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/products.tsx",
                                lineNumber: 234,
                                columnNumber: 14
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 233,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: [
                                "$",
                                product.price
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 240,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: product.quantity
                            }, void 0, !1, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 243,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "flex items-center gap-6",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                                  loading: isSubmitting,
                                  variant: "subtle",
                                  loaderPosition: "right",
                                  onClick: () => {
                                    setSelectedProductId(product.id), setMode(0 /* edit */);
                                  },
                                  children: "Edit"
                                }, void 0, !1, {
                                  fileName: "app/routes/staff/products.tsx",
                                  lineNumber: 248,
                                  columnNumber: 15
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/staff/products.tsx",
                                lineNumber: 247,
                                columnNumber: 14
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/staff/products.tsx",
                              lineNumber: 246,
                              columnNumber: 13
                            }, this)
                          ]
                        }, product.id, !0, {
                          fileName: "app/routes/staff/products.tsx",
                          lineNumber: 229,
                          columnNumber: 12
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/routes/staff/products.tsx",
                        lineNumber: 227,
                        columnNumber: 10
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/staff/products.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff/products.tsx",
                  lineNumber: 192,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff/products.tsx",
                lineNumber: 191,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/staff/products.tsx",
              lineNumber: 190,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/staff/products.tsx",
          lineNumber: 153,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/products.tsx",
        lineNumber: 152,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Modal, {
        opened: isModalOpen,
        onClose: () => {
          setSelectedProductId(null), handleModal.close();
        },
        title: (0, import_clsx2.default)({
          "Edit product": mode === 0 /* edit */,
          "Add product": mode === 1 /* add */
        }),
        centered: !0,
        overlayBlur: 1.2,
        overlayOpacity: 0.6,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            disabled: isSubmitting,
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                name: "productId",
                value: selectedProduct == null ? void 0 : selectedProduct.id
              }, void 0, !1, {
                fileName: "app/routes/staff/products.tsx",
                lineNumber: 287,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.TextInput, {
                name: "name",
                label: "Name",
                defaultValue: selectedProduct == null ? void 0 : selectedProduct.name,
                error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/products.tsx",
                lineNumber: 289,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.TextInput, {
                name: "image",
                label: "Image",
                defaultValue: selectedProduct == null ? void 0 : selectedProduct.image,
                error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.image,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/products.tsx",
                lineNumber: 296,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Textarea, {
                name: "description",
                label: "Description",
                defaultValue: selectedProduct == null ? void 0 : selectedProduct.description,
                error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.description,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/products.tsx",
                lineNumber: 304,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.NumberInput, {
                name: "price",
                label: "Price",
                defaultValue: selectedProduct == null ? void 0 : selectedProduct.price,
                error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.price,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/products.tsx",
                lineNumber: 312,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.NumberInput, {
                name: "quantity",
                label: "Quantity",
                defaultValue: selectedProduct == null ? void 0 : selectedProduct.quantity,
                error: (_k = (_j = fetcher.data) == null ? void 0 : _j.fieldErrors) == null ? void 0 : _k.quantity,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/products.tsx",
                lineNumber: 320,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1 flex items-center justify-end gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                    variant: "subtle",
                    disabled: isSubmitting,
                    onClick: () => handleModal.close(),
                    color: "red",
                    children: "Cancel"
                  }, void 0, !1, {
                    fileName: "app/routes/staff/products.tsx",
                    lineNumber: 329,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                    type: "submit",
                    loading: isSubmitting,
                    loaderPosition: "right",
                    children: "Add Product"
                  }, void 0, !1, {
                    fileName: "app/routes/staff/products.tsx",
                    lineNumber: 337,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/staff/products.tsx",
                lineNumber: 328,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/staff/products.tsx",
            lineNumber: 286,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff/products.tsx",
          lineNumber: 285,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/products.tsx",
        lineNumber: 271,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/staff/products.tsx",
    lineNumber: 151,
    columnNumber: 3
  }, this);
}

// app/routes/staff/quotes.tsx
var quotes_exports = {};
__export(quotes_exports, {
  action: () => action10,
  default: () => Orders,
  loader: () => loader14
});
var import_solid13 = require("@heroicons/react/24/solid"), import_core20 = require("@mantine/core"), import_hooks16 = require("@mantine/hooks"), import_client11 = require("@prisma/client"), import_node18 = require("@remix-run/node"), import_react24 = require("@remix-run/react"), React12 = __toESM(require("react")), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader14 = async ({ request }) => {
  await requireUser(request);
  let orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      invoice: !0,
      items: {
        include: {
          item: !0
        }
      },
      user: !0
    }
  });
  return (0, import_node18.json)({ orders });
}, action10 = async ({ request }) => {
  var _a, _b;
  let formData = await request.formData(), intent = (_a = formData.get("intent")) == null ? void 0 : _a.toString();
  (0, import_tiny_invariant2.default)(intent, "Invalid intent");
  let orderId = (_b = formData.get("orderId")) == null ? void 0 : _b.toString();
  switch ((0, import_tiny_invariant2.default)(orderId, "Invalid order id"), intent) {
    case "cancel-order":
      return await prisma.order.update({
        where: { id: orderId },
        data: {
          status: import_client11.OrderStatus.REJECTED
        }
      }), (0, import_node18.json)({ success: !0 });
    case "approve-order":
      return await prisma.order.update({
        where: { id: orderId },
        data: {
          status: import_client11.OrderStatus.SUCCESS
        }
      }), (0, import_node18.json)({ success: !0 });
    default:
      return (0, import_node18.json)({ success: !1, message: "Invalid intent" }, { status: 400 });
  }
};
function Orders() {
  let { orders } = (0, import_react24.useLoaderData)(), transition = (0, import_react24.useTransition)(), submit = (0, import_react24.useSubmit)(), [items, setProducts] = React12.useState(
    []
  ), [isOpen, modalHandler] = (0, import_hooks16.useDisclosure)(!1, {
    onClose: () => setProducts([])
  }), isSubmitting = transition.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        className: "mt-16",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:flex sm:items-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "sm:flex-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "text-xl font-semibold text-gray-900",
                    children: "Quotes"
                  }, void 0, !1, {
                    fileName: "app/routes/staff/quotes.tsx",
                    lineNumber: 95,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "mt-2 text-sm text-gray-700",
                    children: "A list of all the quotes from inventories."
                  }, void 0, !1, {
                    fileName: "app/routes/staff/quotes.tsx",
                    lineNumber: 96,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/staff/quotes.tsx",
                lineNumber: 94,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/staff/quotes.tsx",
              lineNumber: 93,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-8 flex flex-col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
                    children: orders.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                      className: "min-w-full divide-y divide-gray-300",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                          className: "bg-gray-50",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                                children: "Name"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/quotes.tsx",
                                lineNumber: 109,
                                columnNumber: 14
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                children: "Original Price"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/quotes.tsx",
                                lineNumber: 115,
                                columnNumber: 14
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                children: "Quoted Price"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/quotes.tsx",
                                lineNumber: 121,
                                columnNumber: 14
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                children: "Status"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/quotes.tsx",
                                lineNumber: 127,
                                columnNumber: 14
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                children: "Products"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/quotes.tsx",
                                lineNumber: 133,
                                columnNumber: 14
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "relative py-3.5 pl-3 pr-4 sm:pr-6"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/quotes.tsx",
                                lineNumber: 139,
                                columnNumber: 14
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/staff/quotes.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/staff/quotes.tsx",
                          lineNumber: 107,
                          columnNumber: 12
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                          className: "divide-y divide-gray-200 bg-white",
                          children: orders.map((order) => {
                            let isPending = order.status === import_client11.OrderStatus.PENDING, isCancelled = order.status === import_client11.OrderStatus.CANCELLED, isRejected = order.status === import_client11.OrderStatus.REJECTED;
                            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "font-medium text-gray-900",
                                      children: [
                                        order.user.firstName,
                                        " ",
                                        order.user.lastName
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/staff/quotes.tsx",
                                      lineNumber: 156,
                                      columnNumber: 17
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "text-gray-500",
                                      children: order.user.email
                                    }, void 0, !1, {
                                      fileName: "app/routes/staff/quotes.tsx",
                                      lineNumber: 159,
                                      columnNumber: 17
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/staff/quotes.tsx",
                                  lineNumber: 155,
                                  columnNumber: 16
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                  children: [
                                    "$",
                                    order.originalAmount.toFixed(2)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/staff/quotes.tsx",
                                  lineNumber: 164,
                                  columnNumber: 16
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                  children: [
                                    "$",
                                    order.quotedAmount.toFixed(2)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/staff/quotes.tsx",
                                  lineNumber: 167,
                                  columnNumber: 16
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core20.Badge, {
                                    color: isPending ? "gray" : isCancelled || isRejected ? "red" : "green",
                                    children: titleCase(order.status)
                                  }, void 0, !1, {
                                    fileName: "app/routes/staff/quotes.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/staff/quotes.tsx",
                                  lineNumber: 170,
                                  columnNumber: 16
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core20.Button, {
                                    variant: "subtle",
                                    compact: !0,
                                    onClick: () => {
                                      setProducts(order.items), modalHandler.open();
                                    },
                                    children: "View all"
                                  }, void 0, !1, {
                                    fileName: "app/routes/staff/quotes.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/staff/quotes.tsx",
                                  lineNumber: 183,
                                  columnNumber: 16
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "relative flex items-center justify-center whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                    className: "flex items-center gap-2",
                                    children: isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core20.ActionIcon, {
                                          color: "green",
                                          disabled: isSubmitting || !isPending,
                                          onClick: () => submit(
                                            {
                                              intent: "approve-order",
                                              orderId: order.id
                                            },
                                            {
                                              method: "post",
                                              replace: !0
                                            }
                                          ),
                                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid13.CheckCircleIcon, {
                                            className: "h-6"
                                          }, void 0, !1, {
                                            fileName: "app/routes/staff/quotes.tsx",
                                            lineNumber: 215,
                                            columnNumber: 21
                                          }, this)
                                        }, void 0, !1, {
                                          fileName: "app/routes/staff/quotes.tsx",
                                          lineNumber: 199,
                                          columnNumber: 20
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core20.ActionIcon, {
                                          color: "red",
                                          type: "submit",
                                          name: "intent",
                                          value: "cancel-order",
                                          disabled: isSubmitting || !isPending,
                                          onClick: () => {
                                            submit(
                                              {
                                                intent: "cancel-order",
                                                orderId: order.id
                                              },
                                              {
                                                method: "post",
                                                replace: !0
                                              }
                                            );
                                          },
                                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid13.MinusCircleIcon, {
                                            className: "h-7"
                                          }, void 0, !1, {
                                            fileName: "app/routes/staff/quotes.tsx",
                                            lineNumber: 236,
                                            columnNumber: 21
                                          }, this)
                                        }, void 0, !1, {
                                          fileName: "app/routes/staff/quotes.tsx",
                                          lineNumber: 217,
                                          columnNumber: 20
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/staff/quotes.tsx",
                                      lineNumber: 198,
                                      columnNumber: 19
                                    }, this) : null
                                  }, void 0, !1, {
                                    fileName: "app/routes/staff/quotes.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/staff/quotes.tsx",
                                  lineNumber: 195,
                                  columnNumber: 16
                                }, this)
                              ]
                            }, order.id, !0, {
                              fileName: "app/routes/staff/quotes.tsx",
                              lineNumber: 154,
                              columnNumber: 15
                            }, this);
                          })
                        }, void 0, !1, {
                          fileName: "app/routes/staff/quotes.tsx",
                          lineNumber: 145,
                          columnNumber: 12
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/staff/quotes.tsx",
                      lineNumber: 106,
                      columnNumber: 11
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid13.ShoppingCartIcon, {
                          className: "mx-auto h-9 w-9 text-gray-500"
                        }, void 0, !1, {
                          fileName: "app/routes/staff/quotes.tsx",
                          lineNumber: 249,
                          columnNumber: 12
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "mt-4 block text-sm font-medium text-gray-500",
                          children: [
                            "No orders placed yet. ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/staff/quotes.tsx",
                              lineNumber: 251,
                              columnNumber: 35
                            }, this),
                            "Come back later."
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/staff/quotes.tsx",
                          lineNumber: 250,
                          columnNumber: 12
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/staff/quotes.tsx",
                      lineNumber: 248,
                      columnNumber: 11
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/staff/quotes.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff/quotes.tsx",
                  lineNumber: 103,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff/quotes.tsx",
                lineNumber: 102,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/staff/quotes.tsx",
              lineNumber: 101,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/staff/quotes.tsx",
          lineNumber: 92,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/quotes.tsx",
        lineNumber: 91,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core20.Modal, {
        opened: isOpen && items.length > 0,
        onClose: () => modalHandler.close(),
        size: "xl",
        overflow: "inside",
        title: "Products",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
            className: "mt-4 w-full text-gray-500 sm:mt-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("caption", {
                className: "sr-only",
                children: "Ice-cream"
              }, void 0, !1, {
                fileName: "app/routes/staff/quotes.tsx",
                lineNumber: 272,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                className: "sr-only text-left text-sm text-gray-500 sm:not-sr-only",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                      scope: "col",
                      className: "py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3",
                      children: "Item"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/quotes.tsx",
                      lineNumber: 275,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                      scope: "col",
                      className: "hidden w-1/5 py-3 pr-8 font-normal sm:table-cell",
                      children: "Quantity"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/quotes.tsx",
                      lineNumber: 281,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                      scope: "col",
                      className: "hidden py-3 pr-8 font-normal sm:table-cell",
                      children: "Price"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/quotes.tsx",
                      lineNumber: 287,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/staff/quotes.tsx",
                  lineNumber: 274,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff/quotes.tsx",
                lineNumber: 273,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                className: "divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t",
                children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "py-6 pr-8",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex items-center",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            src: item.item.image,
                            alt: item.item.name,
                            className: "mr-6 h-16 w-16 rounded object-cover object-center"
                          }, void 0, !1, {
                            fileName: "app/routes/staff/quotes.tsx",
                            lineNumber: 300,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "flex flex-col",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "font-medium text-gray-900",
                              children: item.item.name
                            }, void 0, !1, {
                              fileName: "app/routes/staff/quotes.tsx",
                              lineNumber: 306,
                              columnNumber: 13
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/staff/quotes.tsx",
                            lineNumber: 305,
                            columnNumber: 12
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/staff/quotes.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/staff/quotes.tsx",
                      lineNumber: 298,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "hidden py-6 pr-8 sm:table-cell",
                      children: item.quantity
                    }, void 0, !1, {
                      fileName: "app/routes/staff/quotes.tsx",
                      lineNumber: 313,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "hidden py-6 pr-8 sm:table-cell",
                      children: [
                        "$",
                        (item.item.price * item.quantity).toFixed(2)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/staff/quotes.tsx",
                      lineNumber: 317,
                      columnNumber: 10
                    }, this)
                  ]
                }, item.id, !0, {
                  fileName: "app/routes/staff/quotes.tsx",
                  lineNumber: 297,
                  columnNumber: 9
                }, this))
              }, void 0, !1, {
                fileName: "app/routes/staff/quotes.tsx",
                lineNumber: 295,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/staff/quotes.tsx",
            lineNumber: 271,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff/quotes.tsx",
          lineNumber: 270,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/quotes.tsx",
        lineNumber: 263,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/staff/quotes.tsx",
    lineNumber: 90,
    columnNumber: 3
  }, this);
}

// app/routes/staff/index.tsx
var staff_exports2 = {};
__export(staff_exports2, {
  default: () => AdminDashboard2,
  loader: () => loader15
});
var import_solid14 = require("@heroicons/react/24/solid"), import_node19 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), import_clsx3 = __toESM(require("clsx"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), actions2 = [
  {
    title: "Quotations",
    description: "Manage quotations",
    href: "quotes",
    icon: import_solid14.UserGroupIcon
  },
  {
    title: "Products",
    description: "View and manage products",
    href: "products",
    icon: import_solid14.BuildingOfficeIcon
  }
], loader15 = async ({ request }) => (0, import_node19.json)({});
function AdminDashboard2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4 p-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "bg-white",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-16 px-4 sm:py-20 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-extrabold tracking-tight text-gray-900",
              children: "Supplier Dashboard"
            }, void 0, !1, {
              fileName: "app/routes/staff/index.tsx",
              lineNumber: 33,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-12 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0",
              children: actions2.map((action13, actionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card2, {
                action: action13,
                actionIdx
              }, actionIdx, !1, {
                fileName: "app/routes/staff/index.tsx",
                lineNumber: 39,
                columnNumber: 9
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/staff/index.tsx",
              lineNumber: 37,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/staff/index.tsx",
          lineNumber: 32,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/index.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/staff/index.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/staff/index.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this);
}
function Card2({
  action: action13,
  actionIdx
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_clsx3.default)(
      actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
      actionIdx === 1 ? "sm:rounded-tr-lg" : "",
      actionIdx === actions2.length - 2 ? "sm:rounded-bl-lg" : "",
      actionIdx === actions2.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
      "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: (0, import_clsx3.default)(
            "text-blue-700",
            "bg-blue-50",
            "inline-flex rounded-lg p-3 ring-4 ring-white"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(action13.icon, {
            className: "h-6 w-6",
            "aria-hidden": "true"
          }, void 0, !1, {
            fileName: "app/routes/staff/index.tsx",
            lineNumber: 77,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff/index.tsx",
          lineNumber: 70,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/index.tsx",
        lineNumber: 69,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            className: "text-lg font-medium",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Link, {
              to: action13.href,
              className: "focus:outline-none",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "absolute inset-0",
                  "aria-hidden": "true"
                }, void 0, !1, {
                  fileName: "app/routes/staff/index.tsx",
                  lineNumber: 84,
                  columnNumber: 7
                }, this),
                action13.title
              ]
            }, void 0, !0, {
              fileName: "app/routes/staff/index.tsx",
              lineNumber: 82,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/staff/index.tsx",
            lineNumber: 81,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "mt-2 text-sm text-gray-500",
            children: action13.description
          }, void 0, !1, {
            fileName: "app/routes/staff/index.tsx",
            lineNumber: 88,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/staff/index.tsx",
        lineNumber: 80,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400",
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
          className: "h-6 w-6",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
          }, void 0, !1, {
            fileName: "app/routes/staff/index.tsx",
            lineNumber: 100,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff/index.tsx",
          lineNumber: 94,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/index.tsx",
        lineNumber: 90,
        columnNumber: 4
      }, this)
    ]
  }, action13.title, !0, {
    fileName: "app/routes/staff/index.tsx",
    lineNumber: 57,
    columnNumber: 3
  }, this);
}

// app/routes/store.tsx
var store_exports = {};
__export(store_exports, {
  default: () => AppLayout4,
  loader: () => loader16
});
var import_solid15 = require("@heroicons/react/24/solid"), import_outline3 = require("@heroicons/react/24/outline"), import_core21 = require("@mantine/core"), import_hooks17 = require("@mantine/hooks"), import_node20 = require("@remix-run/node"), import_react26 = require("@remix-run/react"), React13 = __toESM(require("react"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader16 = async ({ request }) => {
  let user = await requireUser(request), inventories = await getAllInventories(), items = inventories.reduce((acc, supplier) => (supplier.items.forEach((item) => acc.push(item)), acc), []);
  return (0, import_node20.json)({
    inventories,
    items,
    hasResetPassword: user.hasResetPassword
  });
};
function AppLayout4() {
  let { user } = useUser(), fetcher = (0, import_react26.useFetcher)(), { hasResetPassword } = (0, import_react26.useLoaderData)(), [isModalOpen, handleModal] = (0, import_hooks17.useDisclosure)(!hasResetPassword), isSubmitting = fetcher.state !== "idle";
  return React13.useEffect(() => {
    fetcher.type === "done" && (!fetcher.data.success || handleModal.close());
  }, [fetcher.data, fetcher.type, handleModal]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex h-full flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderComponent4, {}, void 0, !1, {
            fileName: "app/routes/store.tsx",
            lineNumber: 66,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.ScrollArea, {
            classNames: { root: "flex-1 bg-gray-50" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Outlet, {}, void 0, !1, {
                fileName: "app/routes/store.tsx",
                lineNumber: 69,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/store.tsx",
              lineNumber: 68,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/store.tsx",
            lineNumber: 67,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterComponent4, {}, void 0, !1, {
            fileName: "app/routes/store.tsx",
            lineNumber: 73,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/store.tsx",
        lineNumber: 65,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Drawer, {
        opened: isModalOpen,
        onClose: handleModal.close,
        title: "Reset Password",
        overlayBlur: 3,
        overlayOpacity: 0.8,
        padding: "xl",
        position: "right",
        withCloseButton: !1,
        closeOnEscape: !1,
        closeOnClickOutside: !1,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          className: "flex flex-col gap-4",
          action: "/api/reset-password",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-6 flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                hidden: !0,
                name: "userId",
                defaultValue: user.id
              }, void 0, !1, {
                fileName: "app/routes/store.tsx",
                lineNumber: 95,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.PasswordInput, {
                required: !0,
                name: "password",
                label: "Enter new password",
                placeholder: "Password"
              }, void 0, !1, {
                fileName: "app/routes/store.tsx",
                lineNumber: 96,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Button, {
                variant: "filled",
                type: "submit",
                fullWidth: !0,
                loading: isSubmitting,
                loaderPosition: "right",
                children: "Update"
              }, void 0, !1, {
                fileName: "app/routes/store.tsx",
                lineNumber: 103,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/store.tsx",
            lineNumber: 94,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/store.tsx",
          lineNumber: 88,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/store.tsx",
        lineNumber: 76,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/store.tsx",
    lineNumber: 64,
    columnNumber: 3
  }, this);
}
function HeaderComponent4() {
  var _a;
  let { user } = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react26.Form, {
        replace: !0,
        action: "/api/auth/logout",
        method: "post",
        id: "logout-form"
      }, void 0, !1, {
        fileName: "app/routes/store.tsx",
        lineNumber: 124,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "flex h-16 items-center border-b border-b-gray-300 py-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          className: "w-full px-10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-full w-full items-center justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-shrink-0 items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Anchor, {
                  component: import_react26.Link,
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex h-10 items-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "flex items-center text-2xl font-bold text-black",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "IMS."
                        }, void 0, !1, {
                          fileName: "app/routes/store.tsx",
                          lineNumber: 132,
                          columnNumber: 11
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "ml-1.5 text-sm font-medium",
                          children: "(STORE)"
                        }, void 0, !1, {
                          fileName: "app/routes/store.tsx",
                          lineNumber: 133,
                          columnNumber: 11
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/store.tsx",
                      lineNumber: 131,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store.tsx",
                  lineNumber: 129,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/store.tsx",
                lineNumber: 128,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Button, {
                    component: import_react26.Link,
                    to: "cart",
                    title: "Cart",
                    variant: "subtle",
                    compact: !0,
                    children: "View Cart"
                  }, void 0, !1, {
                    fileName: "app/routes/store.tsx",
                    lineNumber: 140,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Menu, {
                    position: "bottom-start",
                    withArrow: !0,
                    transition: "pop-top-right",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Menu.Target, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Avatar, {
                            color: "blue",
                            size: "md",
                            children: [
                              user.firstName.charAt(0),
                              user.lastName.charAt(0)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/store.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/store.tsx",
                          lineNumber: 156,
                          columnNumber: 10
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/store.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Menu.Dropdown, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Menu.Item, {
                            disabled: !0,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              className: "mt-0.5 text-sm",
                              children: (_a = user.inventory) == null ? void 0 : _a.name
                            }, void 0, !1, {
                              fileName: "app/routes/store.tsx",
                              lineNumber: 166,
                              columnNumber: 11
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/store.tsx",
                            lineNumber: 165,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Divider, {}, void 0, !1, {
                            fileName: "app/routes/store.tsx",
                            lineNumber: 169,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Menu.Item, {
                            disabled: !0,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "flex flex-col",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  children: [
                                    user.firstName,
                                    " ",
                                    user.lastName,
                                    " "
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/store.tsx",
                                  lineNumber: 173,
                                  columnNumber: 12
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  className: "mt-0.5 text-sm",
                                  children: user.email
                                }, void 0, !1, {
                                  fileName: "app/routes/store.tsx",
                                  lineNumber: 176,
                                  columnNumber: 12
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/store.tsx",
                              lineNumber: 172,
                              columnNumber: 11
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/store.tsx",
                            lineNumber: 171,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Divider, {}, void 0, !1, {
                            fileName: "app/routes/store.tsx",
                            lineNumber: 180,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline3.ShoppingBagIcon, {
                              className: "w- h-4 text-gray-700"
                            }, void 0, !1, {
                              fileName: "app/routes/store.tsx",
                              lineNumber: 183,
                              columnNumber: 17
                            }, this),
                            component: import_react26.Link,
                            to: "order-history",
                            children: "Your orders"
                          }, void 0, !1, {
                            fileName: "app/routes/store.tsx",
                            lineNumber: 182,
                            columnNumber: 10
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid15.ArrowLeftOnRectangleIcon, {
                              className: "h-4 w-4 text-gray-700"
                            }, void 0, !1, {
                              fileName: "app/routes/store.tsx",
                              lineNumber: 191,
                              columnNumber: 12
                            }, this),
                            type: "submit",
                            form: "logout-form",
                            children: "Logout"
                          }, void 0, !1, {
                            fileName: "app/routes/store.tsx",
                            lineNumber: 189,
                            columnNumber: 10
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/store.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/store.tsx",
                    lineNumber: 150,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/store.tsx",
                lineNumber: 139,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/store.tsx",
            lineNumber: 127,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/store.tsx",
          lineNumber: 126,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/store.tsx",
        lineNumber: 125,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/store.tsx",
    lineNumber: 123,
    columnNumber: 3
  }, this);
}
function FooterComponent4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core21.Footer, {
    height: 1,
    className: "flex items-center justify-center text-center",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, !1, {
      fileName: "app/routes/store.tsx",
      lineNumber: 211,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store.tsx",
    lineNumber: 210,
    columnNumber: 3
  }, this);
}

// app/routes/store/inventory.$slug.tsx
var inventory_slug_exports = {};
__export(inventory_slug_exports, {
  default: () => Inventory,
  loader: () => loader17
});
var import_solid16 = require("@heroicons/react/24/solid"), import_core22 = require("@mantine/core"), import_node21 = require("@remix-run/node"), import_react27 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader17 = async ({ params }) => {
  let { slug } = params;
  if (!slug)
    throw new Response("No slug provided", { status: 404 });
  return (0, import_node21.json)({ slug });
};
function Inventory() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemsGrid2, {}, void 0, !1, {
        fileName: "app/routes/store/inventory.$slug.tsx",
        lineNumber: 24,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/store/inventory.$slug.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/inventory.$slug.tsx",
    lineNumber: 22,
    columnNumber: 3
  }, this);
}
function ItemsGrid2() {
  let { slug } = (0, import_react27.useLoaderData)(), inventory = useInventory(slug), { addItemToCart } = useInventoryCart();
  return inventory ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "py-16 sm:py-20",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "mb-6 py-6 text-center text-2xl font-extrabold tracking-tight text-gray-900",
            children: inventory.name
          }, void 0, !1, {
            fileName: "app/routes/store/inventory.$slug.tsx",
            lineNumber: 44,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:grid-cols-4 lg:gap-x-8",
            children: inventory.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: inventory == null ? void 0 : inventory.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "group relative mx-auto sm:mx-[unset]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "overflow-hidden rounded-md bg-gray-200 shadow",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Link, {
                      to: `/items/${item.slug}`,
                      prefetch: "intent",
                      className: "overflow-hidden rounded-lg bg-gray-200",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: item.image,
                        alt: item.name,
                        className: "aspect-square w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                      }, void 0, !1, {
                        fileName: "app/routes/store/inventory.$slug.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/store/inventory.$slug.tsx",
                      lineNumber: 57,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store/inventory.$slug.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "mt-4 text-sm text-gray-700",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core22.Anchor, {
                      to: `/items/${item.slug}`,
                      prefetch: "intent",
                      component: import_react27.Link,
                      children: item.name
                    }, void 0, !1, {
                      fileName: "app/routes/store/inventory.$slug.tsx",
                      lineNumber: 71,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store/inventory.$slug.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "mt-1 text-sm font-medium text-gray-900",
                    children: [
                      "$",
                      item.price
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/store/inventory.$slug.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core22.Button, {
                    variant: "light",
                    fullWidth: !0,
                    type: "submit",
                    mt: "md",
                    onClick: () => addItemToCart({
                      ...item,
                      quantity: 1
                    }),
                    children: "Add to cart"
                  }, void 0, !1, {
                    fileName: "app/routes/store/inventory.$slug.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                  }, this)
                ]
              }, item.id, !0, {
                fileName: "app/routes/store/inventory.$slug.tsx",
                lineNumber: 52,
                columnNumber: 10
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/store/inventory.$slug.tsx",
              lineNumber: 50,
              columnNumber: 8
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid16.ShoppingCartIcon, {
                  className: "mx-auto h-9 w-9 text-gray-500"
                }, void 0, !1, {
                  fileName: "app/routes/store/inventory.$slug.tsx",
                  lineNumber: 103,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "mt-4 block text-sm font-medium text-gray-500",
                  children: [
                    "No items in stock. ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/routes/store/inventory.$slug.tsx",
                      lineNumber: 105,
                      columnNumber: 29
                    }, this),
                    "Come back later."
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/inventory.$slug.tsx",
                  lineNumber: 104,
                  columnNumber: 9
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/store/inventory.$slug.tsx",
              lineNumber: 102,
              columnNumber: 8
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/store/inventory.$slug.tsx",
            lineNumber: 48,
            columnNumber: 6
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/store/inventory.$slug.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/store/inventory.$slug.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/inventory.$slug.tsx",
    lineNumber: 41,
    columnNumber: 3
  }, this) : null;
}

// app/routes/store/order-history.tsx
var order_history_exports2 = {};
__export(order_history_exports2, {
  action: () => action11,
  default: () => OrderHistory2,
  loader: () => loader18
});
var import_outline4 = require("@heroicons/react/24/outline"), import_core23 = require("@mantine/core"), import_client13 = require("@prisma/client"), import_node22 = require("@remix-run/node"), import_react28 = require("@remix-run/react"), React14 = __toESM(require("react"));

// app/lib/store-order.server.ts
var import_client12 = require("@prisma/client");
function getStoreOrders(userId) {
  return prisma.sale.findMany({
    where: {
      userId
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      user: !0,
      invoice: !0,
      items: {
        include: {
          item: !0
        }
      }
    }
  });
}
async function createStoreOrder({
  userId,
  items,
  amount,
  paymentMethod
}) {
  return await prisma.$transaction(async (tx) => tx.sale.create({
    data: {
      userId,
      status: import_client12.OrderStatus.SUCCESS,
      items: {
        createMany: {
          data: items.map((item) => ({
            itemId: item.id,
            quantity: item.quantity
          }))
        }
      },
      invoice: {
        create: {
          amount,
          totalAmount: amount,
          paymentMethod
        }
      }
    }
  }));
}

// app/routes/store/order-history.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), dateFormatter2 = new Intl.DateTimeFormat("en-US"), loader18 = async ({ request }) => {
  let userId = await requireUserId(request), orders = await getStoreOrders(userId);
  return (0, import_node22.json)({ orders });
}, action11 = async ({ request }) => {
  var _a, _b;
  let userId = await requireUserId(request), formData = await request.formData(), intent = (_a = formData.get("intent")) == null ? void 0 : _a.toString();
  if (!userId || !intent)
    return unauthorized({ success: !1, message: "Unauthorized" });
  switch (intent) {
    case "cancel-order": {
      let orderId = (_b = formData.get("orderId")) == null ? void 0 : _b.toString();
      return orderId ? cancelOrder(orderId).then(() => (0, import_node22.json)({ success: !0 })).catch((e) => (0, import_node22.json)({ success: !1, message: e.message }, { status: 500 })) : badRequest({ success: !1, message: "Invalid order id" });
    }
    default:
      return badRequest({ success: !1, message: "Invalid intent" });
  }
};
function OrderHistory2() {
  let { orders } = (0, import_react28.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react28.useSearchParams)(), { clearCart } = useInventoryCart();
  return React14.useEffect(() => {
    if (searchParams.get("success")) {
      clearCart(), setSearchParams({}, { replace: !0 });
      return;
    }
  }, [clearCart, searchParams, setSearchParams]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "py-16 sm:py-24",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mx-auto max-w-7xl sm:px-2 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl",
                    children: "Order history"
                  }, void 0, !1, {
                    fileName: "app/routes/store/order-history.tsx",
                    lineNumber: 78,
                    columnNumber: 10
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/order-history.tsx",
                  lineNumber: 77,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-16",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                      className: "sr-only",
                      children: "Recent orders"
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 84,
                      columnNumber: 10
                    }, this),
                    orders.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                      children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Order2, {
                        order
                      }, order.id, !1, {
                        fileName: "app/routes/store/order-history.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                      }, this))
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 86,
                      columnNumber: 11
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState3, {}, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 92,
                      columnNumber: 11
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/order-history.tsx",
                  lineNumber: 83,
                  columnNumber: 9
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/store/order-history.tsx",
              lineNumber: 76,
              columnNumber: 8
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/store/order-history.tsx",
            lineNumber: 75,
            columnNumber: 7
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/store/order-history.tsx",
          lineNumber: 74,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/store/order-history.tsx",
        lineNumber: 73,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/store/order-history.tsx",
      lineNumber: 72,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/order-history.tsx",
    lineNumber: 71,
    columnNumber: 3
  }, this);
}
function EmptyState3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline4.ShoppingBagIcon, {
        className: "mx-auto h-9 w-9 text-gray-500"
      }, void 0, !1, {
        fileName: "app/routes/store/order-history.tsx",
        lineNumber: 107,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "mt-4 block text-sm font-medium text-gray-500",
        children: "No previous orders"
      }, void 0, !1, {
        fileName: "app/routes/store/order-history.tsx",
        lineNumber: 108,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/store/order-history.tsx",
    lineNumber: 106,
    columnNumber: 3
  }, this);
}
function Order2({
  order
}) {
  var _a;
  let cancelOrder2 = (0, import_react28.useFetcher)(), isCancellingOrder = cancelOrder2.state !== "idle", isOrderPending = order.status === import_client13.OrderStatus.PENDING, isOrderCancelled = order.status === import_client13.OrderStatus.CANCELLED;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
          className: "sr-only",
          children: [
            "Order placed on",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", {
              dateTime: order.createdAt,
              children: dateFormatter2.format(new Date(order.createdAt))
            }, void 0, !1, {
              fileName: "app/routes/store/order-history.tsx",
              lineNumber: 132,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/store/order-history.tsx",
          lineNumber: 130,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex items-center justify-between py-6 px-4 sm:gap-6 sm:px-6 lg:gap-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
              className: "flex items-center gap-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                      className: "font-medium text-gray-900",
                      children: "Order number"
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 140,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                      className: "mt-1 text-gray-500",
                      children: order.id.slice(-6).toUpperCase()
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 141,
                      columnNumber: 8
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/order-history.tsx",
                  lineNumber: 139,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "hidden sm:block",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                      className: "font-medium text-gray-900",
                      children: "Date placed"
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 147,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                      className: "mt-1 text-gray-500",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", {
                        dateTime: order.createdAt,
                        children: dateFormatter2.format(new Date(order.createdAt))
                      }, void 0, !1, {
                        fileName: "app/routes/store/order-history.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 148,
                      columnNumber: 8
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/order-history.tsx",
                  lineNumber: 146,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                      className: "font-medium text-gray-900",
                      children: "Total amount"
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 156,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                      className: "mt-1 font-medium text-gray-900",
                      children: [
                        "$",
                        (_a = order.invoice) == null ? void 0 : _a.amount.toFixed(2)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 157,
                      columnNumber: 8
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/order-history.tsx",
                  lineNumber: 155,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between pt-6 text-gray-900 sm:block sm:pt-0",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                      className: "font-medium text-gray-900",
                      children: "Status"
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 163,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                      className: "mt-1 font-medium text-gray-900",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core23.Badge, {
                        color: isOrderPending ? "blue" : isOrderCancelled ? "red" : "green",
                        children: titleCase(order.status)
                      }, void 0, !1, {
                        fileName: "app/routes/store/order-history.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 164,
                      columnNumber: 8
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/order-history.tsx",
                  lineNumber: 162,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/store/order-history.tsx",
              lineNumber: 138,
              columnNumber: 6
            }, this),
            isOrderPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core23.Button, {
              color: "red",
              variant: "outline",
              loaderPosition: "right",
              loading: isCancellingOrder,
              onClick: () => cancelOrder2.submit(
                {
                  intent: "cancel-order",
                  orderId: order.id
                },
                { method: "post", replace: !0 }
              ),
              children: "Cancel Order"
            }, void 0, !1, {
              fileName: "app/routes/store/order-history.tsx",
              lineNumber: 177,
              columnNumber: 7
            }, this) : null
          ]
        }, void 0, !0, {
          fileName: "app/routes/store/order-history.tsx",
          lineNumber: 137,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
          className: "divide-y divide-gray-200",
          children: order.items.map(({ item, quantity }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            className: "p-4 sm:p-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center sm:items-start",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: item.image,
                      alt: item.name,
                      className: "h-full w-full object-cover object-center"
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 203,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store/order-history.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "ml-6 flex-1 text-sm",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "font-medium text-gray-900 sm:flex sm:justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                            children: [
                              item.name,
                              " ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                children: [
                                  "(x",
                                  quantity,
                                  ")"
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/store/order-history.tsx",
                                lineNumber: 212,
                                columnNumber: 24
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/store/order-history.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            className: "mt-2 sm:mt-0",
                            children: [
                              "$",
                              (item.price * quantity).toFixed(2)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/store/order-history.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/store/order-history.tsx",
                        lineNumber: 210,
                        columnNumber: 10
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "hidden text-gray-500 sm:mt-2 sm:block",
                        children: item.description
                      }, void 0, !1, {
                        fileName: "app/routes/store/order-history.tsx",
                        lineNumber: 218,
                        columnNumber: 10
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/store/order-history.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/store/order-history.tsx",
                lineNumber: 201,
                columnNumber: 8
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-6 sm:flex sm:justify-between",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-1 items-center justify-center gap-4",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core23.Anchor, {
                      component: import_react28.Link,
                      to: `/items/${item.slug}`,
                      size: "sm",
                      children: "View Item"
                    }, void 0, !1, {
                      fileName: "app/routes/store/order-history.tsx",
                      lineNumber: 227,
                      columnNumber: 11
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store/order-history.tsx",
                    lineNumber: 226,
                    columnNumber: 10
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/order-history.tsx",
                  lineNumber: 225,
                  columnNumber: 9
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/store/order-history.tsx",
                lineNumber: 224,
                columnNumber: 8
              }, this)
            ]
          }, item.id, !0, {
            fileName: "app/routes/store/order-history.tsx",
            lineNumber: 200,
            columnNumber: 7
          }, this))
        }, void 0, !1, {
          fileName: "app/routes/store/order-history.tsx",
          lineNumber: 198,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/store/order-history.tsx",
      lineNumber: 129,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/order-history.tsx",
    lineNumber: 128,
    columnNumber: 3
  }, this);
}

// app/routes/store/items.$slug.tsx
var items_slug_exports2 = {};
__export(items_slug_exports2, {
  default: () => Item2,
  loader: () => loader19
});
var import_core24 = require("@mantine/core"), import_node23 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), React15 = __toESM(require("react"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader19 = async ({ params }) => {
  let { slug } = params;
  if (!slug)
    throw new Response("No slug provided", { status: 404 });
  return (0, import_node23.json)({ slug });
};
function Item2() {
  let { slug } = (0, import_react29.useLoaderData)();
  return useInventoryItem(slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemOverview2, {}, void 0, !1, {
        fileName: "app/routes/store/items.$slug.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/store/items.$slug.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/items.$slug.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this) : null;
}
function ItemOverview2() {
  let { slug } = (0, import_react29.useLoaderData)(), item = useInventoryItem(slug), { addItemToCart } = useInventoryCart(), [quantity, setQuantity] = React15.useState(1);
  return item ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 lg:px-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "sm:mt-10 lg:row-span-2 lg:mt-0 lg:self-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "overflow-hidden rounded-lg shadow",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: item.image,
              alt: item.name,
              className: "aspect-square w-full object-cover"
            }, void 0, !1, {
              fileName: "app/routes/store/items.$slug.tsx",
              lineNumber: 57,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/store/items.$slug.tsx",
            lineNumber: 56,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/store/items.$slug.tsx",
          lineNumber: 55,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "lg:col-start-2 lg:max-w-lg lg:self-end",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-4",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
                children: item.name
              }, void 0, !1, {
                fileName: "app/routes/store/items.$slug.tsx",
                lineNumber: 68,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/store/items.$slug.tsx",
              lineNumber: 67,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
              "aria-labelledby": "information-heading",
              className: "mt-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                  id: "information-heading",
                  className: "sr-only",
                  children: "Cuisine information"
                }, void 0, !1, {
                  fileName: "app/routes/store/items.$slug.tsx",
                  lineNumber: 74,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "text-lg text-gray-900 sm:text-xl",
                  children: [
                    "$",
                    item.price
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/items.$slug.tsx",
                  lineNumber: 78,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-4 space-y-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "text-base text-gray-500",
                    children: item.description
                  }, void 0, !1, {
                    fileName: "app/routes/store/items.$slug.tsx",
                    lineNumber: 81,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/items.$slug.tsx",
                  lineNumber: 80,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/store/items.$slug.tsx",
              lineNumber: 73,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.NumberInput, {
              label: "Quantity",
              className: "mt-8",
              placeholder: "Choose quantity.",
              description: "Default quantity is 1",
              value: quantity,
              onChange: (qty) => {
                !qty || qty < 1 ? setQuantity(1) : setQuantity(qty);
              },
              error: quantity === void 0 || quantity < 1 ? !0 : void 0,
              min: 1
            }, void 0, !1, {
              fileName: "app/routes/store/items.$slug.tsx",
              lineNumber: 85,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/store/items.$slug.tsx",
          lineNumber: 66,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-10 lg:col-start-2 lg:row-start-2 lg:max-w-lg lg:self-start",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core24.Button, {
            fullWidth: !0,
            mt: "2.5rem",
            onClick: () => addItemToCart({
              ...item,
              quantity
            }),
            children: "Add to cart"
          }, void 0, !1, {
            fileName: "app/routes/store/items.$slug.tsx",
            lineNumber: 105,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/store/items.$slug.tsx",
          lineNumber: 104,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/store/items.$slug.tsx",
      lineNumber: 53,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/items.$slug.tsx",
    lineNumber: 52,
    columnNumber: 3
  }, this) : null;
}

// app/routes/store/inventory.tsx
var inventory_exports = {};
__export(inventory_exports, {
  default: () => Inventories
});
var import_core25 = require("@mantine/core"), import_react30 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Inventories() {
  let { inventories } = useStoreAppData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-16 sm:py-20",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-3xl font-extrabold tracking-tight text-gray-900",
              children: "Inventories"
            }, void 0, !1, {
              fileName: "app/routes/store/inventory.tsx",
              lineNumber: 14,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8",
              children: inventories.map((inventory) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "group relative mx-auto sm:mx-[unset]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "aspect-square h-48 overflow-hidden rounded-md bg-gray-200 shadow lg:h-64",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: inventory.image,
                      alt: inventory.name,
                      className: "h-full w-full object-cover object-center transition-all group-hover:scale-105"
                    }, void 0, !1, {
                      fileName: "app/routes/store/inventory.tsx",
                      lineNumber: 26,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store/inventory.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "mt-4 text-sm text-gray-700",
                    children: inventory.name
                  }, void 0, !1, {
                    fileName: "app/routes/store/inventory.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core25.Anchor, {
                    to: inventory.slug,
                    prefetch: "intent",
                    component: import_react30.Link,
                    className: "absolute inset-0 cursor-pointer"
                  }, void 0, !1, {
                    fileName: "app/routes/store/inventory.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                  }, this)
                ]
              }, inventory.id, !0, {
                fileName: "app/routes/store/inventory.tsx",
                lineNumber: 21,
                columnNumber: 10
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/store/inventory.tsx",
              lineNumber: 18,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/store/inventory.tsx",
          lineNumber: 13,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/store/inventory.tsx",
        lineNumber: 12,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/store/inventory.tsx",
      lineNumber: 11,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/inventory.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/routes/store/index.tsx
var store_exports2 = {};
__export(store_exports2, {
  default: () => Dashboard2
});
var import_core26 = require("@mantine/core"), import_react31 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Dashboard2() {
  let { items } = useStoreAppData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SuppliersList2, {}, void 0, !1, {
        fileName: "app/routes/store/index.tsx",
        lineNumber: 12,
        columnNumber: 4
      }, this),
      items.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemList, {}, void 0, !1, {
        fileName: "app/routes/store/index.tsx",
        lineNumber: 13,
        columnNumber: 25
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/store/index.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}
function SuppliersList2() {
  let { inventories } = useStoreAppData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-white",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "pt-16 pb-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "md:flex md:items-center md:justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-3xl font-extrabold tracking-tight text-gray-900",
                children: "Inventories"
              }, void 0, !1, {
                fileName: "app/routes/store/index.tsx",
                lineNumber: 26,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Anchor, {
                component: import_react31.Link,
                to: "inventory",
                prefetch: "intent",
                className: "hidden md:block",
                children: [
                  "Browse all inventories",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    "aria-hidden": "true",
                    children: " \u2192"
                  }, void 0, !1, {
                    fileName: "app/routes/store/index.tsx",
                    lineNumber: 36,
                    columnNumber: 30
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/store/index.tsx",
                lineNumber: 30,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/store/index.tsx",
            lineNumber: 25,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:grid-cols-6 lg:gap-x-8",
            children: inventories.map((inventory, index) => index >= appConfig_default.cardsLimit ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "group relative mx-auto sm:mx-[unset]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "overflow-hidden rounded-md bg-gray-200 shadow transition-all",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Link, {
                    to: `inventory/${inventory.slug}`,
                    prefetch: "intent",
                    className: "overflow-hidden rounded-lg bg-gray-200",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: inventory.image,
                      alt: inventory.name,
                      className: "aspect-square w-full object-cover object-center transition-all group-hover:scale-105"
                    }, void 0, !1, {
                      fileName: "app/routes/store/index.tsx",
                      lineNumber: 57,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store/index.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/index.tsx",
                  lineNumber: 51,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "mt-4 text-sm text-gray-700",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Anchor, {
                    to: `inventory/${inventory.slug}`,
                    prefetch: "intent",
                    component: import_react31.Link,
                    children: inventory.name
                  }, void 0, !1, {
                    fileName: "app/routes/store/index.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/index.tsx",
                  lineNumber: 65,
                  columnNumber: 10
                }, this)
              ]
            }, inventory.id, !0, {
              fileName: "app/routes/store/index.tsx",
              lineNumber: 47,
              columnNumber: 9
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/store/index.tsx",
            lineNumber: 40,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-8 md:hidden",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Anchor, {
              component: import_react31.Link,
              to: "suppliers",
              prefetch: "intent",
              size: "sm",
              children: [
                "Browse all suppliers",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  "aria-hidden": "true",
                  children: " \u2192"
                }, void 0, !1, {
                  fileName: "app/routes/store/index.tsx",
                  lineNumber: 81,
                  columnNumber: 28
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/store/index.tsx",
              lineNumber: 80,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/store/index.tsx",
            lineNumber: 79,
            columnNumber: 6
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/store/index.tsx",
        lineNumber: 24,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/store/index.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/index.tsx",
    lineNumber: 22,
    columnNumber: 3
  }, this);
}
function ItemList() {
  let { items } = useStoreAppData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "pt-16 pb-10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "md:flex md:items-center md:justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-3xl font-extrabold tracking-tight text-gray-900",
                children: "Items"
              }, void 0, !1, {
                fileName: "app/routes/store/index.tsx",
                lineNumber: 98,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Anchor, {
                component: import_react31.Link,
                to: "items",
                prefetch: "intent",
                className: "hidden md:block",
                children: [
                  "Browse all Items",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    "aria-hidden": "true",
                    children: " \u2192"
                  }, void 0, !1, {
                    fileName: "app/routes/store/index.tsx",
                    lineNumber: 107,
                    columnNumber: 24
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/store/index.tsx",
                lineNumber: 101,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/store/index.tsx",
            lineNumber: 97,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-12 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:grid-cols-6 lg:gap-x-8",
            children: items.map((item, index) => index >= appConfig_default.cardsLimit ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "group relative mx-auto sm:mx-[unset]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "aspect-square overflow-hidden rounded-md bg-gray-200 shadow group-hover:opacity-75",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react31.Link, {
                    to: `items/${item.slug}`,
                    prefetch: "intent",
                    className: "overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: item.image,
                      alt: item.name,
                      className: "w-full object-cover object-center"
                    }, void 0, !1, {
                      fileName: "app/routes/store/index.tsx",
                      lineNumber: 128,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store/index.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/index.tsx",
                  lineNumber: 122,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "mt-4 text-sm text-gray-700",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Anchor, {
                    to: `items/${item.slug}`,
                    prefetch: "intent",
                    component: import_react31.Link,
                    children: item.name
                  }, void 0, !1, {
                    fileName: "app/routes/store/index.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/index.tsx",
                  lineNumber: 136,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "mt-1 text-sm font-medium text-gray-900",
                  children: [
                    "$",
                    item.price
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/index.tsx",
                  lineNumber: 146,
                  columnNumber: 10
                }, this)
              ]
            }, item.id, !0, {
              fileName: "app/routes/store/index.tsx",
              lineNumber: 118,
              columnNumber: 9
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/store/index.tsx",
            lineNumber: 111,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-8 text-sm md:hidden",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core26.Anchor, {
              component: import_react31.Link,
              to: "items",
              prefetch: "intent",
              size: "sm",
              children: [
                "Browse all items",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  "aria-hidden": "true",
                  children: " \u2192"
                }, void 0, !1, {
                  fileName: "app/routes/store/index.tsx",
                  lineNumber: 156,
                  columnNumber: 24
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/store/index.tsx",
              lineNumber: 155,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/store/index.tsx",
            lineNumber: 154,
            columnNumber: 6
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/store/index.tsx",
        lineNumber: 96,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/store/index.tsx",
      lineNumber: 95,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/index.tsx",
    lineNumber: 94,
    columnNumber: 3
  }, this);
}

// app/routes/store/items.tsx
var items_exports2 = {};
__export(items_exports2, {
  default: () => Items2
});
var import_core27 = require("@mantine/core"), import_react32 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Items2() {
  let { items } = useStoreAppData(), { addItemToCart } = useInventoryCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-16 sm:py-20",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-extrabold tracking-tight text-gray-900",
              children: "Items"
            }, void 0, !1, {
              fileName: "app/routes/store/items.tsx",
              lineNumber: 16,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8",
              children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mx-auto sm:mx-[unset]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-48 overflow-hidden rounded-md bg-gray-200 shadow lg:h-64",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: item.image,
                      alt: item.name,
                      className: "h-full w-full object-cover object-center"
                    }, void 0, !1, {
                      fileName: "app/routes/store/items.tsx",
                      lineNumber: 25,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store/items.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "mt-4 text-sm text-gray-700",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core27.Anchor, {
                      to: item.slug,
                      prefetch: "intent",
                      component: import_react32.Link,
                      children: item.name
                    }, void 0, !1, {
                      fileName: "app/routes/store/items.tsx",
                      lineNumber: 33,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/store/items.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "mt-1 text-sm font-medium text-gray-900",
                    children: [
                      "$",
                      item.price
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/store/items.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "mt-1 text-sm font-medium text-gray-900",
                    children: [
                      "Quantity: ",
                      item.quantity
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/store/items.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core27.Button, {
                    variant: "light",
                    fullWidth: !0,
                    type: "submit",
                    mt: "md",
                    onClick: () => addItemToCart({
                      ...item,
                      quantity: 1
                    }),
                    children: "Add to cart"
                  }, void 0, !1, {
                    fileName: "app/routes/store/items.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                  }, this)
                ]
              }, item.id, !0, {
                fileName: "app/routes/store/items.tsx",
                lineNumber: 23,
                columnNumber: 10
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/store/items.tsx",
              lineNumber: 20,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/store/items.tsx",
          lineNumber: 15,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/store/items.tsx",
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/store/items.tsx",
      lineNumber: 13,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/store/items.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/routes/store/cart.tsx
var cart_exports2 = {};
__export(cart_exports2, {
  action: () => action12,
  default: () => Cart2
});
var import_solid17 = require("@heroicons/react/24/solid"), import_core28 = require("@mantine/core"), import_notifications6 = require("@mantine/notifications"), import_client14 = require("@prisma/client"), import_node24 = require("@remix-run/node"), import_react33 = require("@remix-run/react"), React16 = __toESM(require("react")), import_react_input_mask2 = __toESM(require("react-input-mask"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function action12({ request }) {
  var _a, _b, _c, _d;
  let formData = await request.formData(), user = await getUser(request), intent = (_a = formData.get("intent")) == null ? void 0 : _a.toString();
  if (!user || !intent)
    return unauthorized({ success: !1, message: "Unauthorized" });
  switch (intent) {
    case "place-order": {
      let stringifiedItems = (_b = formData.get("items[]")) == null ? void 0 : _b.toString(), amount = (_c = formData.get("amount")) == null ? void 0 : _c.toString(), paymentMethod = (_d = formData.get("paymentMethod")) == null ? void 0 : _d.toString();
      if (!stringifiedItems || !amount || !paymentMethod)
        return badRequest({
          success: !1,
          message: "Invalid request body"
        });
      let items = JSON.parse(stringifiedItems);
      return await createStoreOrder({
        userId: user.id,
        items,
        amount: Number(amount),
        paymentMethod
      }), (0, import_node24.redirect)("/store/order-history/?success=true");
    }
    default:
      return badRequest({ success: !1, message: "Invalid intent" });
  }
}
function Cart2() {
  let id = React16.useId(), fetcher = (0, import_react33.useFetcher)(), { clearCart, itemsInCart, totalPrice } = useInventoryCart(), { user } = useOptionalUser(), [paymentMethod, setPaymentMethod] = React16.useState(
    import_client14.PaymentMethod.CREDIT_CARD
  ), [isPaymentModalOpen, setIsPaymentModalOpen] = React16.useState(!1), closePaymentModal = () => setIsPaymentModalOpen(!1), showPaymentModal = () => setIsPaymentModalOpen(!0), placeOrder = () => {
    let formData = new FormData();
    formData.append("items[]", JSON.stringify(itemsInCart)), formData.append("amount", totalPrice.toString()), formData.append("intent", "place-order"), formData.append("paymentMethod", paymentMethod), fetcher.submit(formData, {
      method: "post",
      replace: !0
    });
  }, isSubmitting = fetcher.state !== "idle";
  return React16.useEffect(() => {
    if (fetcher.type === "done" && ((0, import_notifications6.cleanNotifications)(), !fetcher.data.success)) {
      (0, import_notifications6.showNotification)({
        title: "Error",
        message: fetcher.data.message,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid17.MinusCircleIcon, {
          className: "h-7 w-7"
        }, void 0, !1, {
          fileName: "app/routes/store/cart.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        color: "red"
      });
      return;
    }
  }, [fetcher.data, fetcher.type]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col gap-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "py-16 px-4 sm:px-4 sm:py-20",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                        className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                        children: "Shopping Cart"
                      }, void 0, !1, {
                        fileName: "app/routes/store/cart.tsx",
                        lineNumber: 122,
                        columnNumber: 10
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/store/cart.tsx",
                      lineNumber: 121,
                      columnNumber: 9
                    }, this),
                    itemsInCart.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "space-x-2",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Button, {
                        variant: "outline",
                        color: "red",
                        onClick: () => clearCart(),
                        disabled: isSubmitting,
                        children: "Clear"
                      }, void 0, !1, {
                        fileName: "app/routes/store/cart.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/store/cart.tsx",
                      lineNumber: 128,
                      columnNumber: 10
                    }, this) : null
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/cart.tsx",
                  lineNumber: 120,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-16",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                      className: "sr-only",
                      children: "Current items in cart"
                    }, void 0, !1, {
                      fileName: "app/routes/store/cart.tsx",
                      lineNumber: 142,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex flex-col gap-12",
                      children: itemsInCart.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartItems2, {
                        showPaymentModal
                      }, void 0, !1, {
                        fileName: "app/routes/store/cart.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState4, {}, void 0, !1, {
                        fileName: "app/routes/store/cart.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/store/cart.tsx",
                      lineNumber: 144,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/store/cart.tsx",
                  lineNumber: 141,
                  columnNumber: 8
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/store/cart.tsx",
              lineNumber: 119,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/store/cart.tsx",
            lineNumber: 118,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/store/cart.tsx",
          lineNumber: 117,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/store/cart.tsx",
        lineNumber: 116,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Modal, {
        opened: !!user && isPaymentModalOpen,
        onClose: closePaymentModal,
        title: "Payment",
        centered: !0,
        overlayBlur: 1,
        overlayOpacity: 0.5,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          className: "flex flex-col gap-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col gap-2",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-sm text-gray-600",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-semibold",
                    children: "Amount: "
                  }, void 0, !1, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 168,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: [
                      "$",
                      totalPrice.toFixed(2)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 169,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/store/cart.tsx",
                lineNumber: 167,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/store/cart.tsx",
              lineNumber: 166,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Select, {
              label: "Payment method",
              value: paymentMethod,
              clearable: !1,
              onChange: (e) => setPaymentMethod(e),
              data: Object.values(import_client14.PaymentMethod).map((method) => ({
                label: titleCase(method.replace(/_/g, " ")),
                value: method
              }))
            }, void 0, !1, {
              fileName: "app/routes/store/cart.tsx",
              lineNumber: 173,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Input.Wrapper, {
              id,
              label: "Card Number",
              required: !0,
              labelProps: { className: "!text-[13px] !font-semibold" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Input, {
                id,
                name: "cardNumber",
                component: import_react_input_mask2.default,
                mask: "9999 9999 9999 9999",
                placeholder: "XXXX XXXX XXXX XXXX",
                alwaysShowMask: !1,
                defaultValue: "54326787678756467"
              }, void 0, !1, {
                fileName: "app/routes/store/cart.tsx",
                lineNumber: 190,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/store/cart.tsx",
              lineNumber: 184,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Input.Wrapper, {
                  id: id + "cvv",
                  label: "CVV",
                  labelProps: { className: "!text-[13px] !font-semibold" },
                  required: !0,
                  className: "w-full",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Input, {
                    name: "cvv",
                    id: id + "cvv",
                    component: import_react_input_mask2.default,
                    mask: "999",
                    placeholder: "XXX",
                    alwaysShowMask: !1,
                    defaultValue: "123"
                  }, void 0, !1, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 209,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/cart.tsx",
                  lineNumber: 202,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Input.Wrapper, {
                  id: id + "expiry",
                  label: "Expiry",
                  labelProps: { className: "!text-[13px] !font-semibold" },
                  required: !0,
                  className: "w-full",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Input, {
                    name: "Expiry",
                    id: id + "expiry",
                    component: import_react_input_mask2.default,
                    mask: "99/9999",
                    placeholder: "XX/XXXX",
                    alwaysShowMask: !1,
                    defaultValue: "122026"
                  }, void 0, !1, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 227,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/cart.tsx",
                  lineNumber: 220,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/store/cart.tsx",
              lineNumber: 201,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 flex items-center gap-4 sm:justify-end",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Button, {
                  variant: "subtle",
                  color: "red",
                  onClick: () => closePaymentModal(),
                  children: "Cancel"
                }, void 0, !1, {
                  fileName: "app/routes/store/cart.tsx",
                  lineNumber: 240,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Button, {
                  variant: "filled",
                  onClick: () => placeOrder(),
                  loading: isSubmitting,
                  loaderPosition: "right",
                  children: "Place order"
                }, void 0, !1, {
                  fileName: "app/routes/store/cart.tsx",
                  lineNumber: 248,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/store/cart.tsx",
              lineNumber: 239,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/store/cart.tsx",
          lineNumber: 165,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/store/cart.tsx",
        lineNumber: 157,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/store/cart.tsx",
    lineNumber: 115,
    columnNumber: 3
  }, this);
}
function CartItems2({ showPaymentModal }) {
  let { itemsInCart, removeItemFromCart, totalPrice } = useInventoryCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        "aria-labelledby": "cart-heading",
        className: "lg:col-span-7",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            id: "cart-heading",
            className: "sr-only",
            children: "Items in your shopping cart"
          }, void 0, !1, {
            fileName: "app/routes/store/cart.tsx",
            lineNumber: 269,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "divide-y divide-gray-200 border-b border-t border-gray-200",
            children: itemsInCart.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: "flex py-6 sm:py-10",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex-shrink-0",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: item.image,
                    alt: item.name,
                    className: "h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                  }, void 0, !1, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/cart.tsx",
                  lineNumber: 276,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "ml-4 flex flex-1 flex-col justify-between sm:ml-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "flex justify-between",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                              className: "text-sm",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react33.Link, {
                                to: `items/${item.slug}`,
                                className: "font-medium text-gray-700 hover:text-gray-800",
                                children: item.name
                              }, void 0, !1, {
                                fileName: "app/routes/store/cart.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/store/cart.tsx",
                              lineNumber: 288,
                              columnNumber: 12
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/store/cart.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            className: "mt-1 text-sm font-medium text-gray-900",
                            children: [
                              "$",
                              item.price.toFixed(2)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/store/cart.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/store/cart.tsx",
                        lineNumber: 286,
                        columnNumber: 10
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "mt-4 sm:mt-0 sm:pr-9",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            children: item.quantity
                          }, void 0, !1, {
                            fileName: "app/routes/store/cart.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "absolute right-0 top-0",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                              type: "button",
                              className: "-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  className: "sr-only",
                                  children: "Remove"
                                }, void 0, !1, {
                                  fileName: "app/routes/store/cart.tsx",
                                  lineNumber: 310,
                                  columnNumber: 13
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.ActionIcon, {
                                  onClick: () => removeItemFromCart(item.id),
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid17.XMarkIcon, {
                                    className: "h-5 w-5",
                                    "aria-hidden": "true"
                                  }, void 0, !1, {
                                    fileName: "app/routes/store/cart.tsx",
                                    lineNumber: 312,
                                    columnNumber: 14
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/store/cart.tsx",
                                  lineNumber: 311,
                                  columnNumber: 13
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/store/cart.tsx",
                              lineNumber: 306,
                              columnNumber: 12
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/store/cart.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/store/cart.tsx",
                        lineNumber: 302,
                        columnNumber: 10
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/store/cart.tsx",
                  lineNumber: 284,
                  columnNumber: 8
                }, this)
              ]
            }, item.id, !0, {
              fileName: "app/routes/store/cart.tsx",
              lineNumber: 275,
              columnNumber: 7
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/store/cart.tsx",
            lineNumber: 273,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/store/cart.tsx",
        lineNumber: 268,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        "aria-labelledby": "summary-heading",
        className: "mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            id: "summary-heading",
            className: "text-lg font-medium text-gray-900",
            children: "Order summary"
          }, void 0, !1, {
            fileName: "app/routes/store/cart.tsx",
            lineNumber: 329,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
            className: "mt-6 space-y-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center justify-between",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                    className: "text-sm text-gray-600",
                    children: "Subtotal"
                  }, void 0, !1, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 335,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                    className: "text-sm font-medium text-gray-900",
                    children: [
                      "$",
                      totalPrice.toFixed(2)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 336,
                    columnNumber: 7
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/store/cart.tsx",
                lineNumber: 334,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center justify-between border-t border-gray-200 pt-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                    className: "text-base font-medium text-gray-900",
                    children: "Order total"
                  }, void 0, !1, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 341,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                    className: "text-base font-medium text-gray-900",
                    children: [
                      "$",
                      totalPrice.toFixed(2)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/store/cart.tsx",
                    lineNumber: 342,
                    columnNumber: 7
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/store/cart.tsx",
                lineNumber: 340,
                columnNumber: 6
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/store/cart.tsx",
            lineNumber: 333,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-6",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core28.Button, {
              type: "submit",
              fullWidth: !0,
              onClick: () => showPaymentModal(),
              children: "Checkout"
            }, void 0, !1, {
              fileName: "app/routes/store/cart.tsx",
              lineNumber: 349,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/store/cart.tsx",
            lineNumber: 348,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/store/cart.tsx",
        lineNumber: 325,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/store/cart.tsx",
    lineNumber: 267,
    columnNumber: 3
  }, this);
}
function EmptyState4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid17.ShoppingCartIcon, {
        className: "mx-auto h-9 w-9 text-gray-500"
      }, void 0, !1, {
        fileName: "app/routes/store/cart.tsx",
        lineNumber: 361,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "mt-4 block text-sm font-medium text-gray-500",
        children: "Your cart is empty"
      }, void 0, !1, {
        fileName: "app/routes/store/cart.tsx",
        lineNumber: 362,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/store/cart.tsx",
    lineNumber: 360,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "9882f565", entry: { module: "/build/entry.client-F6JVJVLI.js", imports: ["/build/_shared/chunk-22X52UKB.js", "/build/_shared/chunk-YC3TMMWS.js", "/build/_shared/chunk-ZQUOLQSI.js", "/build/_shared/chunk-CUPSZOF3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SD36DDDL.js", imports: ["/build/_shared/chunk-XNI4WCTR.js", "/build/_shared/chunk-3G6YT33Q.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-TBJKEH43.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-XTMKPQHJ.js", imports: ["/build/_shared/chunk-V5QCBG5D.js", "/build/_shared/chunk-EWPAYX6X.js", "/build/_shared/chunk-OLUPIZTM.js", "/build/_shared/chunk-3KJW2S5I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/cart": { id: "routes/__app/cart", parentId: "routes/__app", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/cart-LGE7IEW2.js", imports: ["/build/_shared/chunk-YHX5YJJB.js", "/build/_shared/chunk-3G6YT33Q.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-YFVBINCX.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/index": { id: "routes/__app/index", parentId: "routes/__app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/index-GRV7DXQR.js", imports: ["/build/_shared/chunk-TBJKEH43.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/items": { id: "routes/__app/items", parentId: "routes/__app", path: "items", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/items-54P6FAZS.js", imports: ["/build/_shared/chunk-3G6YT33Q.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/items.$slug": { id: "routes/__app/items.$slug", parentId: "routes/__app", path: "items/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/items.$slug-SUXKOKMA.js", imports: ["/build/_shared/chunk-3G6YT33Q.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/order-history": { id: "routes/__app/order-history", parentId: "routes/__app", path: "order-history", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/order-history-YRX2VTE3.js", imports: ["/build/_shared/chunk-VUF45W6C.js", "/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-YHX5YJJB.js", "/build/_shared/chunk-3G6YT33Q.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-6SBVRXZP.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-KJBN32CR.js", "/build/_shared/chunk-YFVBINCX.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/suppliers": { id: "routes/__app/suppliers", parentId: "routes/__app", path: "suppliers", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/suppliers-V3FUTDRW.js", imports: ["/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/suppliers.$slug": { id: "routes/__app/suppliers.$slug", parentId: "routes/__app", path: "suppliers/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/suppliers.$slug-PBFEMTNH.js", imports: ["/build/_shared/chunk-3G6YT33Q.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__auth-FBJ3DJH7.js", imports: ["/build/_shared/chunk-3KJW2S5I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "routes/__auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-GXWCZBXO.js", imports: ["/build/_shared/chunk-6SBVRXZP.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-VXMXG3N5.js", "/build/_shared/chunk-KJBN32CR.js", "/build/_shared/chunk-YFVBINCX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/register": { id: "routes/__auth/register", parentId: "routes/__auth", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/register-UVKXRSK3.js", imports: ["/build/_shared/chunk-VXMXG3N5.js", "/build/_shared/chunk-KJBN32CR.js", "/build/_shared/chunk-YFVBINCX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-6SRT3GO7.js", imports: ["/build/_shared/chunk-OLUPIZTM.js", "/build/_shared/chunk-3KJW2S5I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-BKGN75QU.js", imports: ["/build/_shared/chunk-6OU4J75P.js", "/build/_shared/chunk-N5DF6OJG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/stores": { id: "routes/admin/stores", parentId: "routes/admin", path: "stores", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/stores-HY24MW6F.js", imports: ["/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-6SBVRXZP.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-KJBN32CR.js", "/build/_shared/chunk-YFVBINCX.js", "/build/_shared/chunk-N5DF6OJG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/suppliers": { id: "routes/admin/suppliers", parentId: "routes/admin", path: "suppliers", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/suppliers-LP4SRUB6.js", imports: ["/build/_shared/chunk-I7LRIVP6.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-6SBVRXZP.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-KJBN32CR.js", "/build/_shared/chunk-YFVBINCX.js", "/build/_shared/chunk-N5DF6OJG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/auth/logout": { id: "routes/api/auth/logout", parentId: "root", path: "api/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api/auth/logout-MBXCJVAB.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/reset-password": { id: "routes/api/reset-password", parentId: "root", path: "api/reset-password", index: void 0, caseSensitive: void 0, module: "/build/routes/api/reset-password-LRPPVY2Q.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff": { id: "routes/staff", parentId: "root", path: "staff", index: void 0, caseSensitive: void 0, module: "/build/routes/staff-MZDIQVAU.js", imports: ["/build/_shared/chunk-OLUPIZTM.js", "/build/_shared/chunk-3KJW2S5I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff/index": { id: "routes/staff/index", parentId: "routes/staff", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/staff/index-FYJZDM56.js", imports: ["/build/_shared/chunk-6OU4J75P.js", "/build/_shared/chunk-N5DF6OJG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff/products": { id: "routes/staff/products", parentId: "routes/staff", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/staff/products-FRWYNA4Z.js", imports: ["/build/_shared/chunk-I7LRIVP6.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-6OU4J75P.js", "/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-YFVBINCX.js", "/build/_shared/chunk-N5DF6OJG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff/quotes": { id: "routes/staff/quotes", parentId: "routes/staff", path: "quotes", index: void 0, caseSensitive: void 0, module: "/build/routes/staff/quotes-XPNOTQ6B.js", imports: ["/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-6SBVRXZP.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-KJBN32CR.js", "/build/_shared/chunk-N5DF6OJG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store": { id: "routes/store", parentId: "root", path: "store", index: void 0, caseSensitive: void 0, module: "/build/routes/store-LABFYQ6C.js", imports: ["/build/_shared/chunk-V5QCBG5D.js", "/build/_shared/chunk-EWPAYX6X.js", "/build/_shared/chunk-OLUPIZTM.js", "/build/_shared/chunk-3KJW2S5I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store/cart": { id: "routes/store/cart", parentId: "routes/store", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/store/cart-YDUWHONX.js", imports: ["/build/_shared/chunk-WU64KLUQ.js", "/build/_shared/chunk-VUF45W6C.js", "/build/_shared/chunk-XNI4WCTR.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-6SBVRXZP.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-KJBN32CR.js", "/build/_shared/chunk-YFVBINCX.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store/index": { id: "routes/store/index", parentId: "routes/store", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/store/index-K7BE4QEB.js", imports: ["/build/_shared/chunk-TBJKEH43.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store/inventory": { id: "routes/store/inventory", parentId: "routes/store", path: "inventory", index: void 0, caseSensitive: void 0, module: "/build/routes/store/inventory-P4UZEYZK.js", imports: ["/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store/inventory.$slug": { id: "routes/store/inventory.$slug", parentId: "routes/store", path: "inventory/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/store/inventory.$slug-ONIMHG5Q.js", imports: ["/build/_shared/chunk-XNI4WCTR.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store/items": { id: "routes/store/items", parentId: "routes/store", path: "items", index: void 0, caseSensitive: void 0, module: "/build/routes/store/items-V6DRGMXJ.js", imports: ["/build/_shared/chunk-XNI4WCTR.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store/items.$slug": { id: "routes/store/items.$slug", parentId: "routes/store", path: "items/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/store/items.$slug-E3OUWV32.js", imports: ["/build/_shared/chunk-XNI4WCTR.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/store/order-history": { id: "routes/store/order-history", parentId: "routes/store", path: "order-history", index: void 0, caseSensitive: void 0, module: "/build/routes/store/order-history-HRAM2UPL.js", imports: ["/build/_shared/chunk-WU64KLUQ.js", "/build/_shared/chunk-YHX5YJJB.js", "/build/_shared/chunk-XNI4WCTR.js", "/build/_shared/chunk-EHD36ZG3.js", "/build/_shared/chunk-6SBVRXZP.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-KJBN32CR.js", "/build/_shared/chunk-YFVBINCX.js", "/build/_shared/chunk-N5DF6OJG.js", "/build/_shared/chunk-TAKWFDWB.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-9882F565.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/reset-password": {
    id: "routes/api/reset-password",
    parentId: "root",
    path: "api/reset-password",
    index: void 0,
    caseSensitive: void 0,
    module: reset_password_exports
  },
  "routes/api/auth/logout": {
    id: "routes/api/auth/logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__auth": {
    id: "routes/__auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__auth/register": {
    id: "routes/__auth/register",
    parentId: "routes/__auth",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/__auth/login": {
    id: "routes/__auth/login",
    parentId: "routes/__auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__app/suppliers.$slug": {
    id: "routes/__app/suppliers.$slug",
    parentId: "routes/__app",
    path: "suppliers/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: suppliers_slug_exports
  },
  "routes/__app/order-history": {
    id: "routes/__app/order-history",
    parentId: "routes/__app",
    path: "order-history",
    index: void 0,
    caseSensitive: void 0,
    module: order_history_exports
  },
  "routes/__app/items.$slug": {
    id: "routes/__app/items.$slug",
    parentId: "routes/__app",
    path: "items/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: items_slug_exports
  },
  "routes/__app/suppliers": {
    id: "routes/__app/suppliers",
    parentId: "routes/__app",
    path: "suppliers",
    index: void 0,
    caseSensitive: void 0,
    module: suppliers_exports
  },
  "routes/__app/index": {
    id: "routes/__app/index",
    parentId: "routes/__app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_exports2
  },
  "routes/__app/items": {
    id: "routes/__app/items",
    parentId: "routes/__app",
    path: "items",
    index: void 0,
    caseSensitive: void 0,
    module: items_exports
  },
  "routes/__app/cart": {
    id: "routes/__app/cart",
    parentId: "routes/__app",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/suppliers": {
    id: "routes/admin/suppliers",
    parentId: "routes/admin",
    path: "suppliers",
    index: void 0,
    caseSensitive: void 0,
    module: suppliers_exports2
  },
  "routes/admin/stores": {
    id: "routes/admin/stores",
    parentId: "routes/admin",
    path: "stores",
    index: void 0,
    caseSensitive: void 0,
    module: stores_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/staff": {
    id: "routes/staff",
    parentId: "root",
    path: "staff",
    index: void 0,
    caseSensitive: void 0,
    module: staff_exports
  },
  "routes/staff/products": {
    id: "routes/staff/products",
    parentId: "routes/staff",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/staff/quotes": {
    id: "routes/staff/quotes",
    parentId: "routes/staff",
    path: "quotes",
    index: void 0,
    caseSensitive: void 0,
    module: quotes_exports
  },
  "routes/staff/index": {
    id: "routes/staff/index",
    parentId: "routes/staff",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: staff_exports2
  },
  "routes/store": {
    id: "routes/store",
    parentId: "root",
    path: "store",
    index: void 0,
    caseSensitive: void 0,
    module: store_exports
  },
  "routes/store/inventory.$slug": {
    id: "routes/store/inventory.$slug",
    parentId: "routes/store",
    path: "inventory/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: inventory_slug_exports
  },
  "routes/store/order-history": {
    id: "routes/store/order-history",
    parentId: "routes/store",
    path: "order-history",
    index: void 0,
    caseSensitive: void 0,
    module: order_history_exports2
  },
  "routes/store/items.$slug": {
    id: "routes/store/items.$slug",
    parentId: "routes/store",
    path: "items/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: items_slug_exports2
  },
  "routes/store/inventory": {
    id: "routes/store/inventory",
    parentId: "routes/store",
    path: "inventory",
    index: void 0,
    caseSensitive: void 0,
    module: inventory_exports
  },
  "routes/store/index": {
    id: "routes/store/index",
    parentId: "routes/store",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: store_exports2
  },
  "routes/store/items": {
    id: "routes/store/items",
    parentId: "routes/store",
    path: "items",
    index: void 0,
    caseSensitive: void 0,
    module: items_exports2
  },
  "routes/store/cart": {
    id: "routes/store/cart",
    parentId: "routes/store",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
