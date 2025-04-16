import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Brain, MessageSquareText } from "lucide-react";

const WelcomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
          <Sparkles className="w-8 h-8 text-purple-500" />
          Привет! Добро пожаловать в Prompt Genius
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Здесь ты научишься создавать отличные промпты, узнаешь лучшие практики и сможешь протестировать свои идеи прямо здесь.
        </p>
      </motion.div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 w-full max-w-4xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
        >
          <Card className="shadow-xl rounded-2xl p-4">
            <CardContent className="flex flex-col items-center text-center gap-3">
              <Brain className="w-10 h-10 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-800">Изучить</h2>
              <p className="text-gray-600 text-sm">
                Получи доступ к темам по промпт-инжинирингу, теориям и практическим советам.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
        >
          <Card className="shadow-xl rounded-2xl p-4">
            <CardContent className="flex flex-col items-center text-center gap-3">
              <MessageSquareText className="w-10 h-10 text-green-500" />
              <h2 className="text-xl font-semibold text-gray-800">Тестировать</h2>
              <p className="text-gray-600 text-sm">
                Проверь, насколько хорош твой промпт, и получи обратную связь в реальном времени.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
        >
          <Card className="shadow-xl rounded-2xl p-4">
            <CardContent className="flex flex-col items-center text-center gap-3">
              <Sparkles className="w-10 h-10 text-purple-500" />
              <h2 className="text-xl font-semibold text-gray-800">Вдохновиться</h2>
              <p className="text-gray-600 text-sm">
                Изучай лучшие примеры промптов, анализируй и вдохновляйся.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-10">
        <Button className="text-lg px-6 py-3">Начать обучение</Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
