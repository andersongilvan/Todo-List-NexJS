
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Plus, List, CircleDashedCheck, CircleCheckBig, CheckLine, Trash,
  PencilLine, Check, Sigma
} from 'lucide-react';

export default function Home() {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg px-4">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button
            className="cursor-pointer"
            variant="secondary"><Plus className="mr-2 h-4 w-4" />Cadastrar</Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-2" />
          <div className="flex gap-2">
            <Badge className="cursor-pointer bg-blue-600"><List /> Todas</Badge>
            <Badge className="cursor-pointer  bg-blue-600"><CircleDashedCheck /> Não finalizadas</Badge>
            <Badge className="cursor-pointer bg-blue-600"><CircleCheckBig /> Concluidas</Badge>
          </div>

          <div className="mt-4">
            <div className="h-14 flex justify-between items-center py-2">
              <div className="w-2 h-full bg-green-600"></div>
              <p className="flex-1 px-2">Estudar React</p> <div className="flex gap-3">
                <CheckLine size={15} className="cursor-pointer" />
                <Trash size={15} className="cursor-pointer" />
                <PencilLine size={15} className="cursor-pointer" /> </div>
            </div>
            <div className="h-14 flex justify-between items-center py-2">
              <div className="w-2 h-full bg-green-600"></div>
              <p className="flex-1 px-2">Estudar React</p> <div className="flex gap-3">
                <CheckLine size={15} className="cursor-pointer" />
                <Trash size={15} className="cursor-pointer" />
                <PencilLine size={15} className="cursor-pointer" /> </div>
            </div>

          </div>
        </CardContent>
        <div>
          <div className="flex justify-between w-full">
            <p className="text-xs">
              <Check size={15} className="inline-block mr-2" />
              Tarefas concluídas: 3/3
            </p>
           <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="text-xs" variant={"destructive"}>Limpar tarefas concluídas</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza que deseja excluir 3 itens?</AlertDialogTitle>

              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Sim</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          </div>

          <div className="h-2 w-full bg-gray-100 rounded-md mt-2">
            <div className="h-full bg-blue-600 rounded-md" style={{ width: "50%" }}></div>
          </div>

          <div className="flex justify-end items-center mt-2 text-sm">
            <Sigma size={15} />
            Tarefas totais: 3
          </div>
          

        </div>
      </Card>
    </main >
  );
}