// /styles/styles.ts
import { StyleSheet } from "react-native";

export const COLORS = {
  bg: "#F8FAFC",
  card: "#FFFFFF",
  primary: "#6366F1",
  success: "#22C55E",
  danger: "#EF4444",
  text: "#0F172A",
  muted: "#64748B"
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 20
  },
  input: {
    backgroundColor: COLORS.card,
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  },
  taskItem: {
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2
  },
  taskText: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 10
  },
  taskDone: {
    textDecorationLine: "line-through",
    color: "#94A3B8"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  doneBtn: {
    backgroundColor: COLORS.success,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10
  },
  deleteBtn: {
    backgroundColor: COLORS.danger,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10
  },
  btnText: {
    color: "#fff",
    fontWeight: "600"
  },
  empty: {
    textAlign: "center",
    color: COLORS.muted,
    marginTop: 40,
    fontSize: 16
  }
});
